/*function $(id){
					return document.getElementById(id);
				}
				var oWrap=$("wrap");
				//
				var oZhong=$("zhong");
				console.log(oZhong);
				var oZhongimg=oZhong.children[0];
				
				var oZoom=$("zoom");
				var oDa=$("da");
				var oDaimg=oDa.children[0];
				
				var oXiao=$("xiao");
				var oLi=oXiao.getElementsByTagName("li");
				var oHover=document.getElementsByClassName("hover");
				
				//console.log(oHover)
		
				for(let i=0;i<oLi.length;i++){
					oLi[i].onclick=function(){
						var oSrc=oLi[i].children[0].getAttribute("src");
						//console.log(oSrc)
						oZhongimg.setAttribute("src",oSrc);
						oDaimg.setAttribute("src",oSrc);
					}
					oLi[i].index=i;
					oLi[i].onmouseover=function(){												
						for(var j=0;j<oLi.length;j++){
							oLi[j].className="";
						
						}
						this.className="hover";												
					}
				}
			
				oZhong.onmouseover=function(){
					oZoom.style.display="block";
					oDa.style.display="block";
				}
				oZhong.onmouseout=function(){
					oZoom.style.display="none";
					oDa.style.display="none";
				}
				
				oZhong.onmousemove=function(e){
					var evt=e || event;
					var x=evt.pageX-oWrap.offsetLeft-oZhong.offsetLeft;//计算出鼠标到zhong的距离
					var y=evt.pageY-oWrap.offsetTop-oZhong.offsetTop;
					//console.log(x,y)
					//计算出zoom到zhong的距离
					var _left=x-oZoom.offsetWidth/2;
					var _top=y-oZoom.offsetHeight/2;
					
					
					
					var cw=oWrap.clientWidth;
					var ch=oWrap.clientHeight;
					
					//使zoom在 zhong 里面移动
					if(_left<=0){
						_left=0;
					}
					if(_top<=0){
						_top=0;
					}
					if(_left>=cw-oZoom.offsetWidth){
						_left=cw-oZoom.offsetWidth;
					}
					if(_top>=ch-oZoom.offsetHeight){
						_top=ch-oZoom.offsetHeight;
					}
					
					
					
					oZoom.style.left=_left+"px";
					oZoom.style.top=_top+"px";
					
					//zoom往左移动，大图往相反方向移动
					
					oDaimg.style.left = - _left*2 + "px";
					oDaimg.style.top = - _top*2 + "px";
				//console.log(oDaimg.style.left);
				}*/