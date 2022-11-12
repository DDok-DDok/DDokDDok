// var slider = document.getElementById("myRange");

// console.log(slider);

// var output = document.getElementById("demo");
// console.log(output);

// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

// $('myRange').value

// console.log($('#myRange'))
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
})



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