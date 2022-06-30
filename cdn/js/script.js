/*------------JQ----------------------------------------- */
(function () {
    var $win = $(window),
        winW = $win.width(),
        winH = $win.height(),
        _media = 1280;


    $(document).ready(function () {

        gsap.to(".movepage", 1, {
            scale: 1,
            y: 0,
            yoyo: true,
            ease: "power1.inOut",
            delay: 0.1,
            opacity: 1,
            stagger: {
                amount: 1.5,
                grid: "auto",
                from: "center"
            }
        });

        gsap.fromTo(".myname", {
            autoAlpha: 0,
            delay: 0.5,
            x: -500,
            ease: "power1.inOut",
        }, {
            autoAlpha: 1,
            ease: "power1.inOut",
            delay: 0.5,
            x: 0,
            duration: 1
        });

        gsap.fromTo(".section.kv .menu", {
            autoAlpha: 0,
            delay: 0.5,
            x: 1000,
            ease: "power1.inOut",
        }, {
            autoAlpha: 1,
            ease: "power1.inOut",
            delay: 0.5,
            x: 0,
            duration: 1
        });

        gsap.fromTo(".main .mylink", {
            autoAlpha: 0,
            delay: 1,
            y: -150,
            ease: "power1.inOut",
        }, {
            autoAlpha: 1,
            ease: "power1.inOut",
            delay: 1,
            y: 0,
            duration: 1
        });

        $('#fullpage').fullpage({
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            css3: true,
            scrollingSpeed: 700,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',

        });


        let _time = 5000;
        var _randomArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        let _pageborder = document.querySelector('.movepage');
        let _mynameborder = document.querySelector('.section.kv .myname');
        let _mylinkbg = document.querySelector('.section.kv .menu');

        setInterval(() => {
            let _colorStr = "";
            for (i = 0; i < 6; i++) {
                _colorStr += _randomArr[Math.ceil(Math.random() * (15 - 0))];
            }

            TweenMax.to(_pageborder, 1.5, {
                autoCSS: false,
                css: {
                    borderColor: "#" + _colorStr,
                }
            });

            TweenMax.to(_mynameborder, 1.5, {
                autoCSS: false,
                delay: 1,
                css: {
                    color: "#" + _colorStr,
                }
            });

            TweenMax.to(_mylinkbg, 1.5, {
                autoCSS: false,
                css: {
                    background: "#" + _colorStr,
                }
            });

        }, _time)

        document.querySelector('.section.kv .main').querySelectorAll('.mylink .box').forEach((e) => {
            let _hovertext = e.textContent;
            e.addEventListener('mouseover', function () {
                let _wordarr = _hovertext.split(" ", 2)[1].split("");

                for (i = 0; i < _wordarr.length; i++) {
                    let _word = document.createElement('div');
                    _word.className = "letter";
                    _word.innerHTML = _wordarr[i];
                    document.querySelector('.hoverText').appendChild(_word);
                }

                let layouts = ["show", "big", "small"];
                let container = document.querySelector(".hoverText");
                let curLayout = 0;

                function nextState() {
                    const state = Flip.getState(".letter, .for, .gsap", {
                        props: "color,backgroundColor",
                        simple: true
                    }); // capture current state

                    container.classList.remove(layouts[curLayout]); // remove old class
                    curLayout = (curLayout + 1) % layouts.length; // increment (loop back to the start if at the end)
                    container.classList.add(layouts[curLayout]); // add the new class

                    Flip.from(state, { // animate from the previous state
                        absolute: true,
                        stagger: 0.07,
                        duration: 0.7,
                        ease: "power2.inOut",
                        //   spin: curLayout === 0, // only spin when going to the "final" layout
                        simple: true,
                        onEnter: (elements, animation) => gsap.fromTo(elements, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            delay: animation.duration() - 0.1
                        }),
                        onLeave: elements => gsap.to(elements, {
                            opacity: 0
                        })
                    });
                    gsap.delayedCall(curLayout === 0 ? 3 : 1, nextState);
                }

                gsap.delayedCall(1, nextState);

                return false;
            })

            e.addEventListener('mouseout', function () {

                // state = Flip.getState(".letter", {props: "size", simple: true}); 
                document.querySelector('.hoverText').innerHTML = "";
                document.querySelector('.hoverText').classList.remove("show");
                return false;
            })
        })
    });
})()