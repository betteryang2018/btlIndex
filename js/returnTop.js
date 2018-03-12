// 绑定页面滚动事件
$(window).bind('scroll',function(){
	var len= $(this).scrollTop();
	if (len>=500){
		$('#returnTop').show();
	}else{
		$('#returnTop').hide();
	}
});
// 绑定回到顶部按钮的点击事件
$('#returnTop').click(function(){
	$('body').animate({scrollTop:0});
})
