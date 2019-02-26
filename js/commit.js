$(function () {
    // 手机按钮
    jQuery("#button-nav").click(function(){
        jQuery(".mobileNav").animate({
            left: "0"
        }, 1000);
        
        })
        
        jQuery(".close").click(function () {
            jQuery(".mobileNav").animate({
            left: "-100%"
        }, 1000);
    })

    // banner图
    var bannerSwiper = new Swiper('.mobileBanner .swiper-container', {
        loop: true,
        autoplay: true,
    });



    // 首页留言
    function check() {
        var obj = document.form;

        if (obj.姓名.value == "") {
            alert("请填写姓名！");
            return false;
        }
        if (obj.邮箱.value == "") {
            alert("请填写邮箱！");
            return false;
        }
        if (obj.电话.value == "") {
            alert("请填写电话！");
            return false;
        }
    }



    // 关于我们
    jQuery(window).on("load", function () {
       jQuery("#aboutText").mCustomScrollbar({
            axis: "yx",
            scrollButtons: {
                enable: true,
                scrollType: "stepped"
            },
            theme: "3d-dark",
            scrollbarPosition: "outside",
            callbacks: {
                onScroll: function () {
                    console.log('滚动开始');
                }
            },

        });
    });
    new WOW().init();



    

    // 放大镜
    var pic = jQuery(".imgpart .pic");
    var magnify = jQuery(".imgpart .pic .magnify");
    var bigpic =jQuery(".imgpart .bigpic");
    var objimg = jQuery(".imgpart .bigpic img");
    pic.mousemove(function (e) {
        magnify.show();
        bigpic.show();
        var pagex = e.pageX;
        var pagey = e.pageY;
        var pictop = pic.offset().top;
        var picleft = pic.offset().left;
        var magnifyw = magnify.width();
        var magnifyh = magnify.height();
        var magnifytop = pagey - pictop - magnifyh / 2;
        var magnifyleft = pagex - picleft - magnifyw / 2;
        var picw = pic.width() - magnifyw;
        var pich = pic.height() - magnifyh;
        magnifytop = magnifytop < 0 ? 0 : magnifytop;
        magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
        magnifytop = magnifytop > pich ? pich : magnifytop;
        magnifyleft = magnifyleft > picw ? picw : magnifyleft;
        magnify.css({
            top: magnifytop,
            left: magnifyleft
        });
        var minl = bigpic.width() - objimg.width();
        var mint = bigpic.height() - objimg.height();
        var objimgl = -magnifyleft * 2;
        var objimgt = -magnifytop * 2;
        objimgl = objimgl < minl ? minl : objimgl;
        objimgt = objimgt < mint ? mint : objimgt;
        objimg.css({
            top: objimgt,
            left: objimgl
        })
    });
    pic.mouseleave(function () {
        magnify.hide();
        bigpic.hide()
    });

    
})