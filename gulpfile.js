var gulp=require("gulp");
var sass = require("gulp-sass");//引入gulp-sass模块  将sass文件转换成css文件
var connect = require("gulp-connect");


gulp.task("copy-index",function(){//index.html文件拷贝到dist文件夹中
	gulp.src("index.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})
gulp.task("copy-login",function(){//index.html文件拷贝到dist文件夹中
	gulp.src("login.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})
gulp.task("copy-register",function(){//index.html文件拷贝到dist文件夹中
	gulp.src("register.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})
gulp.task("copy-shopping",function(){//index.html文件拷贝到dist文件夹中
	gulp.src("shopping.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})
gulp.task("copy-list",function(){//index.html文件拷贝到dist文件夹中
	gulp.src("list.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})
gulp.task("copy-detailspafe",function(){//index.html文件拷贝到dist文件夹中
	gulp.src("detailspafe.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})




gulp.task("copy-images",function(){	
	gulp.src("images/**").pipe(gulp.dest("dist/images"))//img文件夹里面的内容也拷贝过来了
})
gulp.task("copy-js",function(){	
	gulp.src("js/**").pipe(gulp.dest("dist/js"))//img文件夹里面的内容也拷贝过来了
})
gulp.task("copy-font",function(){	
	gulp.src("font/**").pipe(gulp.dest("dist/font"))//img文件夹里面的内容也拷贝过来了
})
gulp.task("watch",function(){
	gulp.watch("index.html",["copy-index"]);
	gulp.watch("login.html",["copy-login"]);
	gulp.watch("register.html",["copy-register"]);
	gulp.watch("shopping.html",["copy-shopping"]);
	gulp.watch("list.html",["copy-list"]);
	gulp.watch("detailspafe.html",["copy-detailspafe"]);
	
	gulp.watch("images/**",["copy-images"]); 
	gulp.watch("js/**",["copy-js"]); 
	gulp.watch("sass/*.scss",["sass"]); 
})

gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sass())	
	.pipe(gulp.dest("dist/css"));//把sass文件转成css文件
})

gulp.task("server",function(){//搭建本地服务

	 connect.server({
	 	root:"dist",//把dist文件夹当做根目录
	 	livereload:true
	 })
})




gulp.task("default",["server","watch","sass"])
//gulp.task("default",["copy-index","copy-login","copy-register","copy-shopping","copy-list","copy-detailspafe","copy-images","copy-js","copy-font"])