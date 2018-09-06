


var scrolled = false;
$(window).resize(function() {
    $("#title").attr('style','min-height:'+$(window).height()+'px');
    $(".box").matchHeight();
});
function Setup(){

console.log($(window).height());
$("#title").attr('style','min-height:'+$(window).height()+'px');
$(".box").matchHeight();
var app = document.getElementById('name');
var typewriter = new Typewriter(app, {

});



typewriter.typeString("Hello, I am Derek")
    .pauseFor(2500)
    .deleteChars(5)
    .typeString('an android developer')
    .pauseFor(2500)
    .deleteChars(20)
    .typeString('a web developer')
    .pauseFor(2500)
    .deleteChars(15)
    .typeString(' Derek ')


    .start();

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height() +50;
    $('#title, .slogan').css({
        'opacity': ((height - scrollTop) / (height))
    })
    if(scrollTop>$(window).height()){
    	$("#hold").addClass("holding");
    }else{
    	$("#hold").removeClass("holding");
    }
});
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function whogo(){
    var elm = document.getElementById('scrollwho');
    $(window).scrollTo(elm,800);
      closeNav();
}
function contactgo(){
  var elm = document.getElementById('scrollcontact');
  $(window).scrollTo(elm,800);
  closeNav();
}
function projectsgo(){
  var elm = document.getElementById('scrollprojects');
  $(window).scrollTo(elm,800);
  closeNav();
}
function homego(){
  var elm = document.getElementById('scrollhome');
  $(window).scrollTo(elm,800);
  closeNav();
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function overlay(x) {

    $("#"+x+"").fadeIn();
        document.getElementById(x).style.display ="block";
        document.body.style="overflow:hidden"

}
function removeoverlay(x) {

    $("#"+x+"").fadeOut();
    document.getElementById(x).style.display ="hidden";
    document.body.style="";

}