var piano = (function(){
  var context, buffer, globalBufferList = [];

  function init(){
    var ext, preUrl = '';

    context = new (window.AudioContext || window.webkitAudioContext)();
    ext = getCompatibleExtension();
    preUrl = 'assets/' + ext;

    var urlList = [
      preUrl + '/C1.' + ext,
      preUrl + '/Cs1.' + ext,      
      preUrl + '/D1.' + ext,         
      preUrl + '/Eb1.' + ext,     
      preUrl + '/E1.' + ext,
      preUrl + '/F1.' + ext,
      preUrl + '/Fs1.' + ext,
      preUrl + '/G1.' + ext,
      preUrl + '/Gs1.' + ext,
      preUrl + '/A1.' + ext,
      preUrl + '/Bb1.' + ext,
      preUrl + '/B1.' + ext,
      preUrl + '/C2.' + ext,
      preUrl + '/Cs2.' + ext,
      preUrl + '/D2.' + ext,
      preUrl + '/Eb2.' + ext,
      preUrl + '/E2.' + ext   
    ];

    bufferLoader = new BufferLoader(
      context,
      urlList, 
      attachBuffers
    );

    bufferLoader.load();
  }

  function attachBuffers(bufferList){
    for(var i = 0, j = bufferList.length; i < j; i++){
      globalBufferList.push(bufferList[i]);
    }
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
    case "audio/mpeg3":
      return 'mp3';
    case "audio/wav":
    case "audio/wave":
      return 'wav';
    case "audio/ogg":
      return 'ogg';
    }
  }

  function playSound(e){
    // Get the key that was played
    var targetNote = parseInt(e.target.dataset.key);
    console.log(targetNote); 

    var source = context.createBufferSource();
    var gainNode = context.createGain();
    gainNode.gain.value = 1.0;

    console.log(globalBufferList[targetNote-1]);
    source.buffer = globalBufferList[targetNote-1];
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


  // if(!context){
  //    alert('Web Audio API not supported.');
  // }

  // var request = new XMLHttpRequest();
  // var url = ('assets/twoCities' || 'assets/twoCities') + getCompatibleExtension();
  // request.open('GET', url ,true);
  // request.responseType = 'arraybuffer';
 
  // request.onload = function(){
  //    var audioData = request.response;
  //    context.decodeAudioData(audioData, function(buf){
  //       buffer = buf;
  //       //------------------------------------------
  //       console.log('buffer ready');
  //       //------------------------------------------
  //    });
  // };
  
  // request.send();
