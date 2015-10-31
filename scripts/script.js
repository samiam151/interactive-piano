var $ = function(selector){
   return document.querySelector(selector);
};

window.addEventListener('load', function(){
   piano.init();
});

$('ul').addEventListener('click', function(event){
   if (event.target.tagName === 'LI') {
      piano.playSound();
   };
});