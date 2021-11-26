var $win = $(window),
    winW = $win.width(),
    winH = $win.height(),
    _media = 1280;

var myScript = function() {

    $(document).ready(function() {

        var $intro = $('.intro .main_nav');
        var $intro_li_a = $('.intro .main_nav li a');


        TweenMax.to('.intro .main_nav li', 5, { transform: 'translateX(0%)', ease: Quart.easeOut });

        $intro_li_a.hover(function() {
            TweenMax.to(this, 3, { backgroundColor: '#333', ease: Quart.easeOut });
            TweenMax.to(this, 1, { color: '#fff', ease: Quart.easeOut });
        }, function() {
            TweenMax.to(this, 3, { backgroundColor: '#fff', ease: Quart.easeOut });
            TweenMax.to(this, 1, { color: '#000', ease: Quart.easeOut });
        });

        let week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        let next;

        function nextday(S, K) {

            let day = S;

            for (let i = 0; i <= 7; i++) {

                if (day == week[i]) {

                    next = (i + K) % 7;

                    return next;

                }
            }

        }

        // nextday('Mon', 12);
        nextday('Thu', 20);

        console.log(week[next]);




        // TweenMax.to($intro, 5, { width: '100%', ease: Quart.easeOut });


        // TweenMax.to('.intro .main_nav ul', 500, {
        //     css: {
        //         // display: 'flex'
        //     },
        //     delay: 1,
        //     ease: Expo.easeOut
        // });

        // TweenMax.to('.intro .main_nav li:nth-child(2)', 500, {
        //     css: {
        //         position: 'relative',
        //         width: 'auto'
        //     },
        //     delay: 1,
        //     ease: Expo.easeOut
        // });


        // TweenMax.staggerFromTo('.intro .main_nav li', 1, {
        //         cycle: {
        //             //an array of values
        //             backgroundColor: ["red", "white", "#00f"],
        //             //function that returns a value
        //             y: function(index) {
        //                 return index * 10;
        //                 console.log(index, target);
        //             }
        //         }
        //     }, 0.5);


        // TweenMax.to('.intro .main_nav ul', 500, { display: 'flex', ease: Quart.easeOut });
        // TweenMax.to('.intro .main_nav li', 500, { position: 'relative', ease: Quart.easeOut });
        // TweenMax.to('.intro .main_nav li', 500, { width: 'auto', ease: Quart.easeOut });


    });

}


/*------------JQ----------------------------------------- */
$(function() {

    var main = myScript();

});