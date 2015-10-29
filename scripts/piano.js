var piano = (function(){
   var context, bufferLoader, source1, source2;

   // function initSounds(){
   //    context = new (window.AudioContext || window.webkitAudioContext)();
   //    bufferLoader = new BufferLoader(
   //       context,
   //       [
   //          'assets/tropez.mp3',
   //          'assets/twoCities.mp3'
   //       ],
   //       finishedLoading
   //    );
   //    bufferLoader.load();
   // }

   
   
   // function finishedLoading(bufferList) {
   //   console.log('made it here');
   //   console.log(bufferList[0]);

   //   // Create two sources and play them both together.
   //   source1 = context.createBufferSource();
   //   source2 = context.createBufferSource();
   //   source1.buffer = bufferList[0];
   //   source2.buffer = bufferList[1];

   //   source1.connect(context.destination);
   //   source2.connect(context.destination);
 
   //    source1.start(0); 
   //    return source1;
   // }


   // function playSound(event){
   //    var target = event.target.dataset.key;
   //    console.log(target, typeof target);
   // }

   // return {
   //    source1 : source1,
   //    initSounds : initSounds,
   //    playSound : playSound,
   // };

}());
