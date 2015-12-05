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
   $('ul').addEventListener('click', function(e){
      if (e.target.tagName === 'LI') {
         piano.playSound(e);
      };
   });

   // MAKE THE SOUNDS PLAY WHEN YOU PRESS THE KEYPAD
   $('body').addEventListener('keydown', function(e){
      var key = String.fromCharCode(e.keyCode); // turns the character code into a the actual letter that was pressed
      piano.playSound(e, key);
   }, false);

   // FN: CLEARS THE LOADING SCREEN
   // function clearLoadingScreen(){
   //    $('.piano').style.display = "initial";
   //    // $('.loadingScreen').style.display = "none";

   //    console.log("loading done");
   // }

}());