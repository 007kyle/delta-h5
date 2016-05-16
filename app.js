/**
 * APP.JS
 * @authors weizhongjian
 * @date    2016-04
 * @version 1.0
 */

var express = require('express');

var path = require('path');

var port = 8008;

// process.env.PORT
var app = express();

// 试图的根目录
app.set('views', './template/');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// APP 
app.get('/' ,function(req,res,next){
    res.render('index/index');
});

//console.log(__dirname)
app.use(express.static(path.join(__dirname, '/')));

// 监听端口
app.listen(port);

console.log('成功启动：http://127.0.0.1:' + port);