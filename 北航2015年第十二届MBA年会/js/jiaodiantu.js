// JavaScript Document
$(".photo_box img").hide();
$(".photo_box img").eq(0).show();
$(".text_box").hide();
$(".text_box").eq(0).show();
var n=0;
function run(){
	if(n<$(".photo_box img").length-1){
		n=n+1
		}else{
		n=0
			}
	$(".photo_box img").hide();
	$(".photo_box img").eq(n).show();
	$(".button_box a").removeClass("current");
	$(".button_box a").eq(n).addClass("current");
	$(".text_box").hide();
    $(".text_box").eq(n).show();
	}
var timer=setInterval(run,1000);
$(".show_box").mouseover(function(){
		clearInterval(timer);
		}).mouseout(function(){
			timer=setInterval(run,1200);
			});
$(".button_box a").click(function(){
	$(".button_box a").removeClass("current");
	$(this).addClass("current");
	
	
	var n=$(".button_box a").index(this);
	$(".photo_box img").hide();
	$(".photo_box img").eq(n).show();
});
