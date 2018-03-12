// navBar 下拉菜单
$(document).ready(function(){
	$('#dropDownBtn').click(function(){
		$('#navBarCls').slideToggle("500");
	})
})

// navBar 下拉菜单 下拉选项
$(document).ready(function(){
	$('.dropdown').click(function(){
		$('ul', this).slideToggle("100");
	})
})

// floatTools
$(document).ready(function(){
	$('#floatTools_show').click(function(){
		$(this).css("display","none");
		$('#floatTools_hide').animate({width:'toggle'},200,);
	})

	$('#floatTools_hide').click(function(){
		$(this).css("display","none");
		$('#floatTools_show').animate({width:'toggle'},30);
	})
})