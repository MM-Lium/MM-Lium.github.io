var $win = $(window),
    winW = $win.width(),
    winH = $win.height(),
    _media = 1280;

var myScript = function() {

    $(document).ready(function() {

        window.addEventListener('keydown',function(e){
           

            const audio = document.querySelector(`li[data-key="${e.keyCode}"]`).dataset.src;
            const musiz = "sounds/"+ audio +".wav";
            const audioPlayer = document.createElement('audio');

            audioPlayer.setAttribute('src',musiz);
            audioPlayer.play();

        })




    });

}


/*------------JQ----------------------------------------- */
$(function() {

    var main = myScript();

});