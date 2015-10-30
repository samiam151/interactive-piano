var piano = (function(){
   var context, buffer;

   function init(){
      context = new (window.AudioContext || window.webkitAudioContext)();

      var request = new XMLHttpRequest();
      var url = 'assets/twoCities.wav' || 'assets/twoCities.mp3'
      request.open('GET', url ,true);
      request.responseType = 'arraybuffer';
     
      request.onload = function(){
         var audioData = request.response;
         console.log(audioData);
         context.decodeAudioData(audioData, function(buf){
            buffer = buf;
            console.log('buffer is ' + buffer);
         });
      };
      
      request.send();
   }

   function playSound(){
      source = context.createBufferSource();
         console.log("source = " + source);
      source.buffer = buffer;
         console.log("source.buffer = " + source.buffer);
      source.connect(context.destination);
      source.start(0);
         console.log('source is playing');
   }

   return {
      init : init,
      playSound : playSound
   };

}());
