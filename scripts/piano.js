var piano = (function(){

   // var testVar = "private";
   // function consoleLogTest(){
   //    console.log(testVar);
   // }
   var context, bufferLoader;

   function initSounds(){
      context = new (window.AudioContext || window.webkitAudioContext)();

   }

   function playSound(event){
      var target = event.target.dataset.key;
      console.log(target, typeof target);
   }



   return {
      playSound : playSound,
      test : consoleLogTest
   };

}());
