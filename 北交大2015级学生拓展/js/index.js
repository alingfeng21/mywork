var i=0;
var oTimer=null;
$(".right_btn").click(function(){
	fnNext();
}); 

$(".left_btn").click(function(){
	fnPre();
	
});
function fnNext(){
	i++;
	if(i>$(".banner_img ul li").length-1)i=0;
	fnDo();
};

function fnPre(){
	if(i<0)i=$(".banner_img ul li").length-1;
	i--;
    fnDo();
};
function fnDo(){
    $(".banner_img ul li").eq(i).css("left","0px").fadeIn(500).siblings().fadeOut(500);
	$(".dot_btn ol li").eq(i).addClass("current").siblings().removeClass();
	$(".txt_box ol li").eq(i).addClass("txt").siblings().removeClass();

}

$("#banner").hover(function(){
	clearInterval(oTimer);
	$(".left_btn,.right_btn").show();
	},function(){
		oTimer=setInterval(function(){$(".right_btn").trigger("click")},2000);
		$(".left_btn,.right_btn").hide();
	});

  $(".dot_btn ol li").click(function(){
	if (i!=$(this).index()) {/*判断当前点和之前点*/
		var oneWidth=$(".banner_img ul li").width();
		var m=i>$(this).index()?-1:1;
		$(".banner_img ul li").eq(i).animate({left:-m*oneWidth},function(){$(this).hide();
		}).end().eq($(this).index()).show().css("left",m*oneWidth).animate({left:0});
		i=$(this).index();//目的是把当前点的值再传给n，在比较n和$(this).index()大小，为进行此代码时，示例2<3,运行之后要把底部按钮往回点击时需要此条语句赋值，把$(this).index()传给n，结果是3>2，所以才移动图片的
		$(".dot_btn ol li").eq(i).addClass("current").siblings().removeClass();
	    $(".txt_box ol li").eq(i).addClass("txt").siblings().removeClass();

	};
})

oTimer=setInterval(function(){$(".right_btn").trigger("click")},2000);
