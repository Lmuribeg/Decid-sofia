$(document).ready(function(){
	var pos1 = $("#seccion1 ").offset().top;


	$("#menu ul li:eq(1)").click(function(){
	$("html").animate({
	     scrollTop : pos1
	})
	$("#seccion1 p").animate({
	"opacity" : "1"

	}, 1000)

	});


	$("header h3:eq(0)").animate({
	"opacity" : "1",
	"margin-left" : "0"
	},1000)

	$("header h3:eq(1)").animate({
	"opacity" : "1",
	"margin-left" : "0"
	},1000)





	/*var pos2 = $("#seccion2 ").offset().top;


	$("#menu ul li:eq(2)").click(function(){
	$("html").animate({
	     scrollTop : pos2
	})
	})

	var pos3 = $("#seccion3 ").offset().top;


	$("#menu ul li:eq(3)").click(function(){
	$("html").animate({
	     scrollTop : pos3
	})
	})*/


	$("#btUp").click(function(){
	$("html").animate({
	"scroll-top" : "0px"
	})


	   
	});


	$('.menu a').on('click', function(e){
		e.preventDefault();
		var atributo = $(this).attr('href');
		$('body, html').stop().animate({
			scrollTop: $(atributo).offset().top
		}, 1500, 'easeInOutCirc');
	});





	$('.foto').click(function(){
		$(this).modal({fadeDuration: 150});
	});



	$('.logo').animate({left: '200px',}, 1500, '');


});


