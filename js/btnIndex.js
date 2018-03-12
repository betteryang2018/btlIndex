$(document).ready(function(){
	// navBar 下拉菜单
	$('#dropDownBtn').click(function(){
		$('#navBarCls').slideToggle("500");
	})
	$('.dropdown').click(function(){
		$('.dropdown ul').slideToggle("100");
	})
	// floatTools
	$('#floatTools_show').click(function(){
		$(this).css("display","none");
		$('#floatTools_hide').css("display","block");
	})

	$('#floatTools_hide').click(function(){
		$(this).css("display","none");
		$('#floatTools_show').css("display","block");
	})
})
