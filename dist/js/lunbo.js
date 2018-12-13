
			$(function(){
				var i=0;
				var timer=setInterval(foo,3000);
													
				$(".tab li").mouseover(function(){
					clearInterval(timer);
					var index=$(this).index();
					i=index;
					
					
					$(this).addClass("hover").siblings().removeClass("hover")
					.parent().siblings().children().eq(index).fadeIn()
					.siblings().fadeOut()
				})
				
				$(".tab li").mouseleave(function(){
					timer=setInterval(foo,3000);
				})
				
				
				function foo(){
					i++;
					if($(".con li").length==i){
						i=0;
					}
					$(".con li").eq(i).fadeIn()
					.siblings().fadeOut()
					.parent().siblings().children().eq(i).addClass("hover")
					.siblings().removeClass("hover");
				}
				
				
				
			})
