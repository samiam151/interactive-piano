var $ = function(selector){
   return document.querySelector(selector);
};

window.addEventListener('load', function(){
   piano.init();
   setTimeout(clearLoadingScreen, 2000);
});

$('ul').addEventListener('click', function(event){
   if (event.target.tagName === 'LI') {
      piano.playSound(event);
   };
});

var clearLoadingScreen = function(){
   $('.pianoWrapper').style.display = "initial";
   $('.loadingScreen').style.display = "none";

   console.log("loading done");
}