
// mobile-navBar 下拉菜单
$(document).ready(function(){
	$('#dropDownBtn').click(function(){
		$('#navBarCls').slideToggle('500');
	})
})

// mobile-navBar 下拉菜单>下拉选项
$(document).ready(function(){
	$('.dropdown').click(function(){
		$('ul', this).slideToggle('100');
	})
})

// mobile-footer 下拉菜单 
$(document).ready(function(){
	$('.ftNav_dropDown').click(function(){
		$('.footer_navCls').slideToggle('500');
	})
	$('.ftCt_dropDown').click(function(){
		$('.footer_contactCls').slideToggle('500');
	})
})

// floatTools
$(document).ready(function(){
	$('#floatTools_show').click(function(){
		$(this).css("display","none");
		$('#floatTools_hide').stop().animate({width:'toggle'},200,);
	})

	$('#floatTools_hide').click(function(){
		$(this).css("display","none");
		$('#floatTools_show').stop().animate({width:'toggle'},30);
	})
})

// pc-navBar 下拉菜单
