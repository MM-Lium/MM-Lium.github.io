var $win = $(window),
    winW = $win.width(),
    winH = $win.height(),
    _media = 1280;

var myScript = function () {

    var _transform = 0;


    $('.clock .number li').each(function () {
        var _all = $(this).index();
        $(this).css('transform', 'rotate(' + _all * 30 + 'deg) ');
    })

    const seconhand = document.querySelector('.second');


    function setdate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const gosec = seconds * 6 + 90;

        const min = now.getMinutes();
        const gomin = min * 6 + 90;

        const hour = now.getHours();
        const gohour = hour * 30 + 90;

        // $('.clock .second').css('transform', 'rotate(' + gosec + 'deg) ');
        seconhand.style.transform=`rotate(${gosec}deg)`;
        
        $('.clock .minute').css('transform', 'rotate(' + gomin + 'deg) ');
        $('.clock .hour').css('transform', 'rotate(' + gohour + 'deg) ');
    }

    setInterval(setdate, 1000);
}

/*------------JQ----------------------------------------- */
$(function () {
    var main = myScript();
});