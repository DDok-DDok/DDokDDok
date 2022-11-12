$(function(){

$('.nav>a').click(function(){
    $('html,body').stop().animate({scrollTop:0},1500);
});

$('.main_text_about').click(function(){
    $('html,body').stop().animate({scrollTop:1000},500);
});

$('.shortcut_proto').click(function(){
    $('html,body').stop().animate({scrollTop:6970},2000);
});



    var $device = $('.drop');
    var $offset = 500;
    var $deviceOST = $device.offset().top - $offset;

    $(window).scroll(function(){
        if($(this).scrollTop() > $deviceOST) {
            $device.find('img').addClass('animate');
        }
    });



    $(document).ready(function(){
        //eq를 이용해서 tab 제어
        // $('.tab_menu li').click(function(){
        //     var num = $(this).index();

        //     $(this).addClass('on').siblings('li').removeClass('on');
        //     $('.tab_cont > div').eq(num).addClass('on').siblings('div').removeClass('on');
        // });

        //id를 이용해서 tab 제어
        $('.tab_menu li').click(function(){
            var name = $(this).attr('data-tab');

            $(this).addClass('on').siblings('li').removeClass('on');
            $("#"+name).addClass('on').siblings('div').removeClass('on');
        });


        AOS.init();


        
        



       






    });





    $(document).ready(function () {
        $(".tab_menu li").click(function () {
            var $this = $(this),
                tabId = $this.data("tab"),
                tabIndex = $this.index();
    
            $(".tab_menu li, .tab_cont>div").removeClass("on");
    
            $this.addClass("on");
            $("#"+tabId).addClass("on");
    
            $(".tab_menu li").each(function (content) {
                $(this).find("img").attr("src", $(this).find("img").attr("src").replace("_none","_click"));
                
                if (tabIndex != content) {
                    $(this).find("img").attr("src", $(this).find("img").attr("src").replace("_click","_none"));
                }
            });
        });
    });









 









});