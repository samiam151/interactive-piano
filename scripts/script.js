var $ = function(selector){
   return document.querySelector(selector);
};

$('ul').addEventListener('click', function(event){
   if (event.target.tagName === 'LI') {
      piano.playSound(event);
      piano.test();
   };
});