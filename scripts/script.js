var $ = function(selector){
   return document.querySelector(selector);
};

$('ul').addEventListener('click', function(event){
   if (event.target.tagName === 'LI') {
      playSound(event);
   };
});

function playSound(event){
   var target = event.target.dataset.key;
   console.log(target, typeof target);
}