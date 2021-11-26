
/* Prototype */

var myLightBox = function(){

    var $this = {
        _this:'',// 20171002
        open : false,
        bgopen : true,     /* bg click true || false */
        addclose : true,   /* addclose true || false */
        scroll : false,    /* div scroll true || false */
        vcenter : false,   /* div center true || false */
        addbtnlayout : '', /* btn div */
        appendclose : '',  /* add lightbox div */
        addlightbox : '',  /* lightbox self */
        thisName:'',        /* lightbox html name */
        link:''
    };
    $this.Ani = function(){}
    $this.callBack = function(){}
    $this.Click = function (e) {
        e.preventDefault();
        if($this.open == true){$this.close();}
        $this._this = $(this); // 20171002
        $this.thisName = $this._this.data('lb'); // 20171002


        $this.addlightbox = $('<div />').appendTo('body');
        $this.addlightbox.fadeOut(0).attr('class', 'lightbox-bg').load($this.link + $this.thisName+'.html' , function () {
            //before do
            $this.open = true;

            //callAni
            $this.Ani();

            //callBack
            $this.callBack();
            

            console.log($this.thisName);

            // scroll
            if($this.scroll){
                $("._scroll").mCustomScrollbar();
                $("._scroll", this).mCustomScrollbar("update");
            }

            // 按鈕置入
            if($this.addclose){
                $this.appendclose.append($this.addbtnlayout);
                $('.btn_lb_x').on('click',$this.close);
            }

            // 背景關閉
            if($this.bgopen){
                $('.lightbox-bg').click(
                    function(e){
                        if (e.target !== this)return;
                        $this.close();
                    }
                );
            }



        });
    }

    $this.close = function () {
        var $lightbox = $('.lightbox-bg');
        $('#mainContainer, header').removeClass('bgBlur');
        $('body,html').attr('style','');
        TweenMax.to($lightbox, 0.5, {
            alpha: 0,
            ease: Back.easeOut,
            onComplete: function () {
                $lightbox.remove();
            }
        });
    }
    return $this;
}