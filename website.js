//-入口文件
var express = require('express');
var path = require('path');
//var mongoose =require('mongoose');
//复制source对象中的所有属性覆盖到destination对象上，并且返回 destination 对象. 复制是按顺序的, 所以后面的对象属性会把前面的对象属性覆盖掉(如果有重复).
var _ = require('underscore')
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
//-express web应用开发框架 路由+中间件    中间件是函数 可访问req对象\res对象\next变量
var website = express();

//连接到数据库jjyuan
//mongoose.connect('mong odb://localhost/jjyuan');

//-指定放模板文件的目录
//-指定模板引擎，后续模板文件不需要加后缀，否则反之
website.set('views','./views/pages');
website.set('view engine','jade');
//-应用级中间件
//-没有挂载路径的中间件，应用的每个请求都会执行该中间件
//-bodyParser用于解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理.
website.use(bodyParser.urlencoded({extended: true}));
website.use(bodyParser.json());
website.use(express.static(path.join(__dirname,'public')));

website.listen(port);
console.log("连接成功，端口号为：" + port);

//**********网站路由**********

//index
website.get('/',function(req,res){
	res.render('index',{
		"title":"杭州萌趣科技"
	})
})
//solutions
website.get('/solutions',function(req,res){
	res.render('solutions',{
		"title":"杭州萌趣科技"
	})
})
//successCases
website.get('/successCases',function(req,res){
	res.render('successCases',{
		"title":"杭州萌趣科技"
	})
})
//cases
website.get('/cases',function(req,res){
	res.render('cases',{
		"title":"杭州萌趣科技"
	})
})
//aboutUs
website.get('/aboutUs',function(req,res){
	res.render('aboutUs',{
		"title":"杭州萌趣科技"
	})
})
//joinUs
website.get('/joinUs',function(req,res){
	res.render('joinUs',{
		"title":"杭州萌趣科技"
	})
})