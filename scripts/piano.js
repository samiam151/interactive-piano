// REVEALING MODULE FOR THE PIANO
// returns init()
// returns plasySounds(event, key)

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
      break;
    case "audio/wav":
    case "audio/wave":
      return 'wav';
      break;
    case "audio/ogg":
      return 'ogg';
      break;
    }
  }

  function playSound(e, key){
    var keyPressed, targetNote;

    if(key){
      console.log(key);
      switch(key){
        case 'A':
          keyPressed = 1; break;
        case 'W':
          keyPressed = 2; break;
        case 'S':
          keyPressed = 3; break;
        case 'E':
          keyPressed = 4; break;
        case 'D':
          keyPressed = 5; break;
        case 'F':
          keyPressed = 6; break;
        case 'T':
          keyPressed = 7; break;
        case 'G':
          keyPressed = 8; break;
        case 'Y':
          keyPressed = 9; break;
        case 'H':
          keyPressed = 10; break;
        case 'U':
          keyPressed = 11; break;
        case 'J':
          keyPressed = 12; break;
        case 'K':
          keyPressed = 13; break;
        case 'O':
          keyPressed = 14; break;
        case 'L':
          keyPressed = 15; break;
        case 'L':
          keyPressed = 16; break;
        case 'P':
          keyPressed = 16; break;
        case ';':
          //keyPressed = 7;
        default: 
          keypressed = null; break;
      };
      targetNote = keyPressed;
    } else {
      targetNote = parseInt(e.target.dataset.key);
    }

    // Get the key that was played
    console.log(targetNote); 

    var source = context.createBufferSource();
    var gainNode = context.createGain();
    gainNode.gain.value = 1.0;

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
