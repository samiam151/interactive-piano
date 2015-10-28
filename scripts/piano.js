var piano = (function(){

   var testVar = "private";

   function playSound(event){
      var target = event.target.dataset.key;
      console.log(target, typeof target);
   }

   function consoleLogTest(){
      console.log(testVar);
   }

   return {
      playSound : playSound,
      test : consoleLogTest
   };

}());
