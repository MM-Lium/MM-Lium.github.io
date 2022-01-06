var $win = $(window),
    winW = $win.width(),
    winH = $win.height(),
    _media = 1280;

var myScript = function () {

        window.addEventListener('keydown', function (e) {
            const audio = document.querySelector(`li[data-key="${e.keyCode}"]`).dataset.src;
            const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
            const musiz = "sounds/" + audio + ".wav";
            const audioPlayer = document.createElement('audio');

            audioPlayer.setAttribute('src', musiz);
            audioPlayer.play();
            key.classList.add('play');

        });

        function removett(e) {
            if (e.propertyName !== 'transform') return;
            this.classList.remove('play');

            console.log(e);
        }
        
        const keys = document.querySelectorAll('.btn_p');
        keys.forEach(key => key.addEventListener("transitionend",removett));
}


/*------------JQ----------------------------------------- */
$(function () {

    var main = myScript();

});