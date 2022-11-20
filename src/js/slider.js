//메인 캐릭터 사이즈 변경
console.log($('#myRange').val())

$('#myRange').on('click', function(){


if (0 < $('#myRange').val() && $('#myRange').val() <= 10){
    $('.mainImg').css({
        'transform':'scale(0.5)'
    })
} 
if (10 < $('#myRange').val() && $('#myRange').val() <= 20){
    $('.mainImg').css({
        'transform':'scale(0.55)'
    })
} 
if (20 < $('#myRange').val() && $('#myRange').val() <= 30){
    $('.mainImg').css({
        'transform':'scale(0.60)'
    })
} 
if (30 < $('#myRange').val() && $('#myRange').val() <= 40){
    $('.mainImg').css({
        'transform':'scale(0.70)'
    })
} 
if (40 < $('#myRange').val() && $('#myRange').val() <= 50){
    $('.mainImg').css({
        'transform':'scale(0.85)'
    })
} 
if (50 < $('#myRange').val() && $('#myRange').val() <= 60){
    $('.mainImg').css({
        'transform':'scale(1)'
    })
} 
if (60 < $('#myRange').val() && $('#myRange').val() <= 70){
    $('.mainImg').css({
        'transform':'scale(1.15)'
    })
} if (70 < $('#myRange').val() && $('#myRange').val() <= 80){
    $('.mainImg').css({
        'transform':'scale(1.2)'
    })
} if (80 < $('#myRange').val() && $('#myRange').val() <= 90){
    $('.mainImg').css({
        'transform':'scale(1.4)'
    })
} if (90 < $('#myRange').val() && $('#myRange').val() <= 100){
    $('.mainImg').css({
        'transform':'scale(1.4)'
    })
}
console.log($('#myRange').val())
});


//--------------------------------------------------------------------------------------------------------------------------------------------------
//캐릭터 이미지 변경
$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#img1").show();
    $("#img2").hide();
    $("#img3").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img1").click(function(){
        $("#img1").hide();
        $("#img2").show();
        $("#img3").hide();
    });

    /*img2를 클릭했을 때 img3을 보여줌*/
    $("#img2").click(function(){
        $("#img3").show();
        $("#img1").hide();
        $("#img2").hide();
    });

    /*img3를 클릭했을 때 img1을 보여줌*/
    $("#img3").click(function(){
        $("#img1").show();
        $("#img2").hide();
        $("#img3").hide();
    });
});
















$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#video0").show();
    $("#video1").hide();
    $("#video2").hide();
    $("#video3").hide();
    $("#video4").hide();
    $("#video5").hide();
    $("#video6").hide();

    /*door_waver_1 클릭했을 때 door_open_ddok를 보여줌*/
    $("#video0").dblclick(function(){
        $("#video0").hide();
        $("#video1").show();
        $("#video2").hide();
        $("#video3").hide();
        $("#video4").hide();
        $("#video5").hide();
        $("#video6").hide();
    });

    $("#video1").dblclick(function(){
        $("#video0").hide();
        $("#video1").hide();
        $("#video2").show();
        $("#video3").hide();
        $("#video4").hide();
        $("#video5").hide();
        $("#video6").hide();
    });

    $("#video2").dblclick(function(){
        $("#video0").hide();
        $("#video1").hide();
        $("#video2").hide();
        $("#video3").show();
        $("#video4").hide();
        $("#video5").hide();
        $("#video6").hide();
    });

    $("#video3").dblclick(function(){
        $("#video0").hide();
        $("#video1").hide();
        $("#video2").hide();
        $("#video3").hide();
        $("#video4").show();
        $("#video5").hide();
        $("#video6").hide();
    });

    $("#video4").dblclick(function(){
        $("#video0").hide();
        $("#video1").hide();
        $("#video2").hide();
        $("#video3").hide();
        $("#video4").hide();
        $("#video5").show();
        $("#video6").hide();
    });

    $("#video5").dblclick(function(){
        $("#video0").hide();
        $("#video1").hide();
        $("#video2").hide();
        $("#video3").hide();
        $("#video4").hide();
        $("#video5").hide();
        $("#video6").show();
    });

    $("#video6").dblclick(function(){
        $("#video0").hide();
        $("#video1").show();
        $("#video2").hide();
        $("#video3").hide();
        $("#video4").hide();
        $("#video5").hide();
        $("#video6").hide();
    });



});



$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $(".move1").show();
    $(".move2").hide();
    $(".move3").hide();
    $(".move4").hide();
    $(".btn_arrow").show();
    $(".btn_arrow2").hide();
    $(".btn_arrow3").hide();
    $(".btn_arrow4").hide();
    $(".btn_back_arrow2").hide();
    $(".btn_back_arrow3").hide();


    /*이채림 칭찬*/
    $(".btn_arrow").click(function(){
        $(".move1").hide();
        $(".move2").show();
        $(".move3").hide();
        $(".move4").hide();
        $(".btn_arrow").hide();
        $(".btn_arrow2").show();
        $(".btn_arrow3").hide();
        $(".btn_arrow4").hide();
        $(".btn_back_arrow2").show();
        $(".btn_back_arrow3").hide();
    });

    $(".btn_arrow2").click(function(){
        $(".move1").hide();
        $(".move2").hide();
        $(".move3").show();
        $(".move4").hide();
        $(".btn_arrow").hide();
        $(".btn_arrow2").hide();
        $(".btn_arrow3").show();
        $(".btn_arrow4").hide();
        $(".btn_back_arrow2").hide();
        $(".btn_back_arrow3").show();
    });

    $(".btn_arrow3").click(function(){
        $(".move1").hide();
        $(".move2").hide();
        $(".move3").hide();
        $(".move4").show();
        $(".btn_arrow").hide();
        $(".btn_arrow2").hide();
        $(".btn_arrow3").hide();
        $(".btn_arrow4").show();
        $(".btn_back_arrow2").hide();
        $(".btn_back_arrow3").hide();
    });

    $(".btn_arrow4").click(function(){
        $(".move1").hide();
        $(".move2").hide();
        $(".move3").show();
        $(".move4").hide();
        $(".btn_arrow").hide();
        $(".btn_arrow2").hide();
        $(".btn_arrow3").show();
        $(".btn_arrow4").hide();
        $(".btn_back_arrow2").hide();
        $(".btn_back_arrow3").show();
    });

    $(".btn_back_arrow3").click(function(){
        $(".move1").hide();
        $(".move2").show();
        $(".move3").hide();
        $(".move4").hide();
        $(".btn_arrow").hide();
        $(".btn_arrow2").show();
        $(".btn_arrow3").hide();
        $(".btn_arrow4").hide();
        $(".btn_back_arrow2").show();
        $(".btn_back_arrow3").hide();
    });

    $(".btn_back_arrow2").click(function(){
        $(".move1").show();
        $(".move2").hide();
        $(".move3").hide();
        $(".move4").hide();
        $(".btn_arrow").show();
        $(".btn_arrow2").hide();
        $(".btn_arrow3").hide();
        $(".btn_arrow4").hide();
        $(".btn_back_arrow2").hide();
        $(".btn_back_arrow3").hide();
    });
});
/*이채림 칭찬*/