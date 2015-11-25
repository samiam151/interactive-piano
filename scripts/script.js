(function(){

   //======================================
   // UTILITY SELECTION FUNCTION
   var $ = function(selector){
      return document.querySelector(selector);
   };
   //======================================

   // LOAD ALL THE SOUNDS, LOADING SCREEN
   window.addEventListener('load', function(){
      piano.init();
      setTimeout(clearLoadingScreen, 1200);
   });

   // MAKE THE SOUNDS PLAY WHEN YOU CLICK ON THE PIANO KEYS
   $('ul').addEventListener('click', function(event){
      if (event.target.tagName === 'LI') {
         piano.playSound(event);
      };
   });

   // MAKE THE SOUNDS PLAY WHEN YOU PRESS THE KEYPAD
   $('body').addEventListener('keydown', respond, false);

   function respond(e){
      var key = String.fromCharCode(e.keyCode);
      piano.playSound(e, key);
   }

   // FN: CLEARS THE LOADING SCREEN
   function clearLoadingScreen(){
      $('.pianoWrapper').style.display = "initial";
      $('.loadingScreen').style.display = "none";

      console.log("loading done");
   }

}());