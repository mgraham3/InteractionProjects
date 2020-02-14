//Week 4 Jquery: Animation & FadeOut Exp.1//
//not fleeting fadeout//
$(document).ready(function(){
    $(".notfleeting").delay(1000).fadeOut("50000");
});
//ever animation to top//
$(document).ready(function(){
    $('.ever')
        .delay(500)
        .animate({top:'100px'}, 1000); 
});
//changinganimation to top//
$(document).ready(function(){
    $('.changing')
        .delay(1000)
        .animate({top:'100px'}, 1000); 
});
//ever fadeout//
$(document).ready(function(){
    $('.ever')
        .delay(500)
        .fadeOut("40000"); 
});
//changing fadeout//
$(document).ready(function(){
    $('.changing')
        .delay(500)
        .fadeOut("40000"); 
});
//everywhere animation to the top//
$(document).ready(function(){
    $('.everywhere')
        .delay(3000)
        .animate({top:'70px'}, 1000); 
});

//Week 4 Jquery: Animation & FadeTo Exp.2//
//fish fade//
$(document).ready(function(){
    $('#fishy').fadeOut(6000, 0.0);
    $('#fishy2').fadeOut(6000, 0.0);
     $('#fishy3').fadeOut(6000, 0.0);
     $('#fishy4').fadeOut(6000, 0.0);
});

//Week 4 Jquery: Animation & FadeIn Exp.3//
//sunflower fadein//
$(document).ready(function(){
    $("#sunfloweranimate").hide().fadeIn(3000, 0.0);
});

//Week 4 Jquery: Animation & Delay Exp.4//
$(document).ready(function(){
    $(".lifeis")
        .hide()
        .delay(1000)
        .fadeIn(1000)
});

//Week 4 Jquery: Animation & Scale Exp.5//
$(document).ready(function(){
    $(".heyu")
        .delay(3000)
        .animate({fontSize: '40pt'})
});
$(document).ready(function(){
    $(".swim")
        .delay(3000)
        .animate({fontSize: '24pt'})
});

//Week 4 Jquery: Animation & String Exp.6//
 $(".happyfish")
        .hide()
        .delay(1000)
        .fadeIn(1000)

//Week 4 Jquery: Animation & Subtle Exp.7//
$(document).ready(function(){
    $(".yousee")
        .fadeTo(3000, 0.25)
});

//Week 4 Jquery: Animation & Chaotic Exp.9//
$(document).ready(function loop(){
    $('#fish1')
        .delay(1000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish2')
        .delay(2000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish3')
        .delay(3000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish4')
        .delay(4000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish5')
        .delay(5000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish6')
        .delay(6000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish7')
        .delay(7000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish8')
        .delay(8000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish9')
        .delay(9000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish10')
        .delay(10000)
        .fadeOut(1000)
});

$(document).ready(function loop(){
    $('#fish11')
        .delay(11000)
        .fadeOut(1000)
});

$(document).ready(function loop(){
    $('#fish12')
        .delay(12000)
        .fadeOut(1000)
});

$(document).ready(function loop(){
    $('#fish13')
        .delay(13000)
        .fadeOut(1000)
});

$(document).ready(function loop(){
    $('#fish14')
        .delay(14000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish15')
        .delay(15000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish16')
        .delay(16000)
        .fadeOut(1000)
});

$(document).ready(function loop(){
    $('#fish17')
        .delay(17000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish18')
        .delay(18000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish19')
        .delay(19000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish20')
        .delay(20000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish21')
        .delay(21000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish22')
        .delay(22000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish23')
        .delay(23000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish24')
        .delay(24000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish25')
        .delay(25000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish26')
        .delay(26000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish27')
        .delay(27000)
        .fadeOut(1000)
});
$(document).ready(function(){
    $(".plentyfish")
        .delay(29000)
        .animate({top: '40px', fontSize: '40pt'})
});

//Week 5 Jquery: Interaction & Click Exp.1//
$(document).ready(function(){
    $(".homophobia").hide();
});
$(".hidebutton").click(function () {
    $(".homophobia").fadeIn(2000);
});

//Week 5 Jquery: Interaction & Color Exp.2//
$(document).ready(function(){
    $(".apology1, .apology2, .apology3, .apology4, .apology5, .ally, .learnmore").hide();
});
$(".pasteldiv1").click(function () {
    $(".apology1").fadeIn(1000);
});
$(".pasteldiv2").click(function () {
    $(".apology2").fadeIn(1000);
});
$(".pasteldiv3").click(function () {
    $(".apology3").fadeIn(1000);
});
$(".pasteldiv4").click(function () {
    $(".apology4").fadeIn(1000);
});
$(".pasteldiv5").click(function () {
    $(".apology5").fadeIn(1000);
});
$(".pasteldiv6").click(function () {
    $(".ally, .learnmore").fadeIn(1000);
});

//Week 5 Jquery: Interaction & mouse Exp.3//
$(document).ready(function(){
    $(".church2, .forgiveness").hide();
});
$(".enter").mouseenter(function () {
    $(".enter").fadeOut(3000);
    $(".church1").fadeOut(3000);
    $(".church2").fadeIn(1000);
    $(".forgiveness").fadeIn(1000);
});

//Week 5 Jquery: Interaction & change css Exp.4//
$(document).ready(function(){
    $(".comes4, .intime4").hide();
});
$(".progress4").click(function () {
    $(".progress4").addClass("progressredorange");
    $(".comes4").fadeIn(1000);
});
$(".comes4").click(function () {
    $(".comes4").addClass("progressredorange");
    $(".intime4").fadeIn(1000);
    $(".intime4").addClass("progressredorange");
});

//Week 5 Jquery: Interaction & change css Exp.5//
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

//Week 5 Jquery: Interaction & Overwhelm Exp.7//
$(document).ready(function(){
  $(".bibleverses1, .bibleverses2, .bibleverses3, .bibleverses4, .bibleverses5").click(function(){
    $(".bibleverses1, .bibleverses2, .bibleverses3, .bibleverses4, .bibleverses5").fadeOut(2000);
  });
});

//Week 5 Jquery: Interaction & Minimal Exp.8//
$(document).ready(function(){
    $(".eletrump, .dontbe, .elecircle").hide();
});
$(document).ready(function(){
  $(".divbackgroundminimal").click(function(){
    $(".eletrump, .dontbe, .elecircle").fadeIn(2000);
  });
});

//Week 5 Jquery: Interaction & Opacity Exp.9//
$(document).ready(function(){
    $(".weallow").hide();
});
$(".smile1").click(function () {
    $(".smile1").fadeTo(500, .25);
});
$(".smile2").click(function () {
    $(".smile2").fadeTo(500, .25);
});
$(".smile3").click(function () {
    $(".smile3").fadeTo(500, .25);
});
$(".smile4").click(function () {
    $(".smile4").fadeTo(500, .25);
    $(".weallow").fadeIn(500)
});