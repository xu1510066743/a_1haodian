$(function(){
	$.get("http://47.104.244.134:8080/goodsbytid.do",{tid:13,page:1,limit:13},function(data){
					console.log(data);
					data=data.data;
					var str="";
					for(var i=1;i<data.length;i++){
						str+=`
						<li>
						<a href="detailspafe.html?id=${data[i].id}"><img src="${data[i].picurl}"/></a>
						<p><a href="detailspafe.html"><span>自营</span>${data[i].name}</a></p>
						<div class="content-3centop">
							<div class="gw">
								<p>已售61%</p>
								<p></p>
								<span>￥${data[i].price}</span>
								<p class="jiaru" data-id="${data[i].id}">加入购物车</p>															
							</div>														
						</div>
					</li>`;
					$("#list").html(str);
					
					}
					
				
				$(".jiaru").click(function(){
					var id=$(this).attr("data-id");
					var token=$.cookie("token");
					//console.log(id,token)
					$.get("http://47.104.244.134:8080/cartsave.do",{gid:id,token:token},function(data){
						console.log(data)
						if(data.code==0){
							alert("添加成功");
						}
					})
				})


	
			$(".content-3cen li").hover(function(){
				$(this).find("img").stop().animate({"width":"252px","height":"252px"})
				$(this).find(".gw").stop().animate({"top":"-50px"})
			},function(){
				$(this).find("img").stop().animate({"width":"242px","height":"242px"})
				$(this).find(".gw").stop().animate({"top":"0px"})
			})
			
			$(window).scroll( function() { 
					    	var scroll=$(document).scrollTop();
							//var aCL=document.getElementsByClassName("cl")
							//var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
							if(scroll>200){
								$(".content-2y").show();
							}else{
								$(".content-2y").hide();
							}
							
			});
	})
			
	
	
})
