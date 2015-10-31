var piano = (function(){
   var context, buffer;

   function init(){
      context = new (window.AudioContext || window.webkitAudioContext)();

      if(!context){
         alert('Web Audio API not supported.');
      }

      var request = new XMLHttpRequest();
      var url = ('assets/twoCities' || 'assets/twoCities') + getCompatibleExtension();
      request.open('GET', url ,true);
      request.responseType = 'arraybuffer';
     
      request.onload = function(){
         var audioData = request.response;
         //------------------------------------------
         console.log(audioData);
         //------------------------------------------
         context.decodeAudioData(audioData, function(buf){
            buffer = buf;
            //------------------------------------------
            console.log('buffer ready');
            //------------------------------------------
         });
      };
      
      request.send();
   }

   function getCompatibleExtension(){
     // Declare some variables
     var formats = [
       'audio/mpeg',
       'audio/mp3',
       'audio/wav',
       'audio/ogg'
       ],
       ext = '', 
       results = [],
       i = 0, j = formats.length,  
       audio = new Audio();
     
     // Make the function that test for browser compatibility
     function canPlay(type){
       return audio.canPlayType(type);
     }
     
     // Loop through the sound formats to see which ones are good
     for(; i < j; i++){
       if(canPlay(formats[i]) === "maybe"){
         results.push(formats[i]);
       }
     }
     
     // Get the appropriate extension
     switch(results[0]) {
       case "audio/mpeg":
       case "audio/mp3":
         return '.mp3';
       case "audio/wav":
       case "audio/wave":
         return '.wav';
       case "audio/ogg":
         return '.ogg';
     }
   }

   function playSound(){
      var source = context.createBufferSource();
      var gainNode = context.createGain();
      gainNode.gain.value = 0.75;
      source.buffer = buffer;
      source.connect(gainNode);
      gainNode.connect(context.destination);
      source.start(0);
         console.log('source is playing');
   }

   return {
      init : init,
      playSound : playSound
   };

}());
