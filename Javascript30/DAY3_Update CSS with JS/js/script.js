var $win = $(window),
    winW = $win.width(),
    winH = $win.height(),
    _media = 1280;

var myScript = function () {

    let startX = 0;
    let startY = 0;


    $('.line').mousemove(function (e) {
        startX = e.clientX - $(this).offset().left;
        startY = e.clientY - $(this).offset().top;
        x = startX;
        y = startY;
        let _tag = $(this).data('tag');
        if (x <= "300") {
            $(this).find('.bull').css({
                left: startX,
                // top: y
            });
            if (_tag == "spa") {
                $(this).prev().css('padding-left', startX);
            } else if (_tag == "blu") {
                $(this).prev().css('filter', 'blur(' + startX + 'px)');
            } else if (_tag == "color") {}
        } else {
            return false;
        }
    });

    // const inputs = document.querySelectorAll('.control input');

    // function handle() {
    //     const _num = this.dataset.size || '';
    //     document.documentElement.style.setProperty(`--${this.name}`, this.value);
    // }

    // inputs.forEach(input => input.addEventListener('change', handle));
    // inputs.forEach(input => input.addEventListener('mousemove', handle));

    var arr = [10, 1, 11, 85, 6, 3, 50];


    var i = j = text = 0;

    for (i = 1; i < arr.length; i++) {

        text = arr[i];
        console.log(i);
        

        for (j = i - 1; j >= 0; j--) {
            console.log(i);

            if (text > arr[j]) {
                console.log(arr[j]);
                break;
            } else {
                arr[j + 1] = arr[j];
            }
        }
        arr[j + 1] = text;



    }


    console.log(arr);




}

/*------------JQ----------------------------------------- */
$(function () {
    var main = myScript();
});