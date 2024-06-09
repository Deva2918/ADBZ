$(function(){

    /*start*/
  /*nav*/
  var nav = $("#c_static_001_P_4483-1659337523385")
  var win = $(window); //得到窗口对象  
  var sc = $(document); //得到document文档对象。
  win.scroll(function () {
      if (sc.scrollTop() >= 10) {
          nav.addClass("fixed scrolled");
         //$("#c_static_001-1653717330832 .e_container-1").addClass("fixed");
         //$(".tNavBox").addClass("setHeight");
      } else {
          nav.removeClass("fixed scrolled");
        // $("#c_static_001-1653717330832 .e_container-1").removeClass("fixed");
        //$(".tNavBox").removeClass("setHeight");
      }
  })
    $("#c_static_001_P_4483-1659337523385").mouseenter(function(){
      if (sc.scrollTop() < 10) {
       nav.addClass("fixed");
      }
    })
    $("#c_static_001_P_4483-1659337523385").mouseleave(function(){
      if (sc.scrollTop() < 10) {
        nav.removeClass("fixed");
      }
    })
    var N1 =["76e2fc7a-0e86-4f9d-b058-90925d707336"];
        if(N1.indexOf($("body").attr("data-pageid")) > -1){
            $("#c_grid-116273709439191").addClass("indexTop");
        } 
    
  $('.navBtn').on('click',function(){
      $(this).siblings('.tNav').toggleClass('tNavHeight');
  });
  $('.navSliBtn').on('click',function(){
      $('.tNav').removeClass('tNavHeight');
  });
  $('.tNavH > .iconJt').on('click',function(){
      $(this).toggleClass('iconJtRotate')
      .parents('.navLi').siblings('.navLi')
      .find('.slidBox').slideUp().end()
      .find('.tNavH').removeClass('tNavHBac').end()
      .find('.iconJt').removeClass('iconJtRotate').end().end().end()
      .parent('.tNavH').addClass('tNavHBac').siblings('.slidBox').slideToggle();
  });
  $('.navSli > .iconJt').on('click',function(){
      $(this).toggleClass('iconJtRotate');
       $(this).parents('.navSli').find('ul').slideToggle();
  });
    
    
		var wow = new WOW({
			boxClass: 'animate', //需要执行动画的元素的 class
			animateClass: 'animated', //animation.css 动画的 class
			offset: 150, //距离可视区域多少开始执行动画
			mobile: true, //是否在移动设备上执行动画
			live: true  //异步加载的内容是否有效
		});
		wow.init();
  
  
    $(".version").hover(function(){
        $(this).addClass("on");
    },function(){
        $(this).removeClass("on");
    })
    
    	$('.change_box .change_boxs').each(function(){
        	$(this).hover(function(){
            	$('.change_box .change_boxs').removeClass('hover');
                $(this).addClass('hover');
            })
        })
    /*end*/
        if($(".pro_desc").length > 0){
        	var txtChang = $(".pro_desc").html();
          $(".pro_desc").html(txtChang.replace(/&nbsp;/gi, " "));
        }
        if($(".prodetail").length > 0){
          $(".prodetail").find("table").wrap("<div class='table_wrap'></div>");
        }
})