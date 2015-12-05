// REVEALING MODULE FOR THE PIANO
// returns init()
// returns playSounds(e, key)

var piano = (function(){
  var context, 
      buffer, 
      globalBufferList = [];

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

    // Sets the "targetKey", which determines which
    // index in the array of sounds [bufferList] 
    if(key){
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
          keyPressed = 17; break;
        default: 
          keypressed = null; break;
          return;
      };
      targetNote = keyPressed;
    } else {
      targetNote = parseInt(e.target.dataset.key);
    }   

    // Play the sound
    var source = context.createBufferSource();
    var gainNode = context.createGain();
    gainNode.gain.value = 1.35;

    source.buffer = globalBufferList[targetNote-1];
    source.connect(gainNode);
    gainNode.connect(context.destination);
    source.start(0);
    console.log('source is playing');

    // Light the keys  
    var target;
    if(e.target.tagName === 'LI'){
      target = e.target;
    } else {
      switch(keyPressed){
        case 1:
          target = document.querySelector('li[data-key="1"]');
          break;
        case 2:
          target = document.querySelector('li[data-key="2"]');
          break;
        case 3:
          target = document.querySelector('li[data-key="3"]');
          break;
        case 4:
          target = document.querySelector('li[data-key="4"]');
          break;
        case 5:
          target = document.querySelector('li[data-key="5"]');
          break;
        case 6:
          target = document.querySelector('li[data-key="6"]');
          break;
        case 7:
          target = document.querySelector('li[data-key="7"]');
          break;
        case 8:
          target = document.querySelector('li[data-key="8"]');
          break;
        case 9:
          target = document.querySelector('li[data-key="9"]');
          break;
        case 10:
          target = document.querySelector('li[data-key="10"]');
          break;
        case 11:
          target = document.querySelector('li[data-key="11"]');
          break;
        case 12:
          target = document.querySelector('li[data-key="12"]');
          break;
        case 13:
          target = document.querySelector('li[data-key="13"]');
          break;
        case 14:
          target = document.querySelector('li[data-key="14"]');
          break;
        case 15:
          target = document.querySelector('li[data-key="15"]');
          break;
        case 16:
          target = document.querySelector('li[data-key="16"]');
          break;
        case 17:
          target = document.querySelector('li[data-key="17"]');
          break;
      }
    }
    
    target.classList.add("lightUp");
    setTimeout(function(){
      target.classList.remove('lightUp');
    }, 150);

  }

  return {
    init : init,
    playSound : playSound
  };

}());
