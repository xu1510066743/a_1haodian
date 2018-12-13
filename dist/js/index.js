//倒计时
var Time=document.getElementById("timer")
 function add(i) { 
			           if(i<10){
			           		return '0'+i;
			           } else{
			           		return ''+i;
			           }
			               			         			              
			       }
time=setInterval(function(){
	var oDate1=new Date("2018/12/16 20:04:58");
	var oDate2=new Date();
	var oDate=oDate1-oDate2;
	var oDay=Math.floor(oDate/1000/3600/24);
	var oHours=Math.floor(oDate/1000/3600%24);
	var oMinut=Math.floor(oDate/1000/60%60);
	var oSecon=Math.floor(oDate/1000%60);	
	
		oDay=add(oDay);              
		oHours=add(oHours);                
		oMinut=add(oMinut);  
		oSecon=add(oSecon);
	
	
	Time.innerText=oDay+":"+oHours+":"+oMinut+":"+oSecon;	
},1000)

//加载数据
$(function(){
	$.get("http://47.104.244.134:8080/goodsbytid.do",{tid:13,page:1,limit:13},function(data){
		console.log(data);
		var data=data.data;
		var str="";
		for(var i=1;i<data.length;i++){
			str+=`<li>
						<div class="c6"><img src="${data[i].picurl}" /></div>
						<p><span>自营</span>${data[i].name}</p>
						<p>￥<span>${data[i].price}</span></p>
						<p><span>满减</span></p>
						
						
						<div class="huadong">
							<p><a href=""><i class="iconfont">&#xe606;</i></a></p>
							<p><a href="">找相似</a></p>
						</div>
						<a href="list.html" class="lia"></a>
					</li>`;
					$("#list").html(str);
		}
		
		
		$("#bianda").find("a").attr("href","list.html");
		$(".content_4").find("a").attr("href","list.html");
		
		
		
		//淡出
		$(".content_6 li").hover(function(){
			$(this).find(".lia").stop().animate({"border":"1px solid red"})
			$(this).find(".huadong").css({"opacity":"0.8","background":"#fff"})
		},function(){
			$(this).find(".lia").stop().animate({"border":"1px solid transparent"})
			$(this).find(".huadong").css({"opacity":"0","background":"transparent"})
		})
	})
	
	
	
	
	
	
	
	
	
	
	$(".con3-r1 img").hover(function(){
		$(this).animate({"left":"-8px"})
	},function(){
		$(this).animate({"left":"0"})
	})
	
	//想做移动8
	$(".dongtu1").hover(function(){
		$(this).animate({"right":"38px"})
	},function(){
		$(this).animate({"right":"30px"})
	})
	$(".dongtu2").hover(function(){
		$(this).animate({"right":"18px"})
	},function(){
		$(this).animate({"right":"10px"})
	})
	
	
	
	//导航
	/*$("#daohang").hover(function(){
		$(this).parent().parent().next().show()
	},function(){
		
	})*/
	$("#daohang").mouseenter(function(){
		$(this).parent().parent().next().show()
	})
	$(".lists").mouseleave(function(){
		$(this).hide()
	})
	//变大
	$("#bianda li a").hover(function(){
		$(this).stop().animate({"width":"220px","height":"220px"})
		//.parent().stop().animate({"top":"-10px"},{"height":"226px"})
	},function(){
		$(this).stop().animate({"width":"210px","height":"216px"})
		//.parent().stop().animate({"top":"0"},{"height":"216px"})
	})
	
	
	
	//回到顶部
		    	$(window).scroll( function() { 
			    	var scroll=$(document).scrollTop();
					//var aCL=document.getElementsByClassName("cl")
					//var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
					if(scroll>500){
						$("#cl").show();
					}else{
						$("#cl").hide();
					}
		    		if(scroll>1000){
		    			$(".cl-d").fadeIn();
		    		}else{
		    			$(".cl-d").fadeOut();
		    		}
		    		if(scroll>600){
						$("#topM").slideDown();
					}else{
						$("#topM").slideUp();
					}
		    		
		    	
		    	});
		    	
		$(".cl-d").click(function(){
			$("html,body").stop().animate({"scrollTop":0},500);
		})
		
		
		
	
	
	
	
	var url = "https://dc.3.cn/category/get?callback=?";
    $.ajax({
		url:url,
		dataType:"jsonp",
		scriptCharset:"gb2312"
	}).then(function(res){
        var $ul = $('.lists');
        for(var i=0;i<res.data.length;i++){
            var menu = res.data[i];

            var $li = $('<li class="list"></li>');
            $ul.append($li);


            //创建二级目录

            var $secondMenuDiv = $('<div class="box"></div>')
            $li.append($secondMenuDiv)

            //二级目录 顶部
            var $topP = $('<p></p>')
            $secondMenuDiv.append($topP);
            for(let n=0;n<menu.t.length;n++){
                let tmpArray = menu.t[n].split('|');//jiadian.jd.com/|家电馆||0
                let $span = $('<span class="tips"></span>');
                $span.html(tmpArray[1]);
                $topP.append($span);
                let $TmpA = $('<a>&gt;</a>');
                $span.append($TmpA);
            }

            //一级目录  家用电器  jiadian.jd.com|家用电器||0
            for(var j=0;j<menu.s.length;j++){
                if(j >=1){
                    $tmp = $('<a class="fgx">/</a>')
                    $li.append($tmp)
                }
                var str =  menu.s[j].n;
                var firstMenuName = str.split('|')[1];
                var $firstMenuSpan = $('<span class="menu"></span>');
                $firstMenuSpan.html(firstMenuName);
                $li.append($firstMenuSpan);

                //二级目录的第 2,3,4,5,6行

                for(let m=0;m< menu.s[j].s.length;m++){
                    let $secondP =$('<p></p>')
                    $secondMenuDiv.append($secondP);

                    //每行的标题
                    let obj =  menu.s[j].s[m];
                    let title = obj.n.split('|')[1];
                    $span = $('<span class="title"></span>');
                    $span.html(title);
                    $secondP.append($span);

                    let $tmpA = $('<a>&gt;</a>');
                    $span.append($tmpA)


                    //二级目录 每行的内容
                    let $tagsDiv = $('<div class="tags"></div>');
                    $secondP.append($tagsDiv);
                    for(let k=0;k<obj.s.length;k++){
                        let secondContentObj = obj.s[k];
                        let title = secondContentObj.n.split('|')[1];
                        let $span = $('<span class="tag"></span>');
                        $span.html(title);
                        $tagsDiv.append($span);
                    }

                }

                //二级目录 后面的图片
                let $imgBoxDiv =$('<div class="imgBox"></div>');
                $secondMenuDiv.append($imgBoxDiv);
                for(let h=0;h<menu.b.length;h++){
                    let src =  '//img10.360buyimg.com/'+ menu.b[h].split('|')[2]
                    let $img = $('<img/>');
                    $img.attr('src',src);
                    $imgBoxDiv.append($img);
                }

            }








        }

    })

		
		
		
		
	
	
})
