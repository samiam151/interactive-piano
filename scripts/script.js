var $ = function(selector){
   return document.querySelector(selector);
};

piano.initSounds();

$('ul').addEventListener('click', function(event){
   if (event.target.tagName === 'LI') {
      piano.playSound(event);
   };
});