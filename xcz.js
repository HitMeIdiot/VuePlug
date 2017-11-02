var express = require('express');
var open = require('child_process'); //子进程 用于打开默认浏览器
var htmlUrl = '/index.html' //默认打开的页面

var proxy = require('http-proxy-middleware');
var app = express();
app.use(express.static('static'));


app.use('/eidpws', proxy({
    target: "http://192.168.1.6:8888", 
    changeOrigin: true
}));
app.listen(8888, function() {
	open.exec('start http://192.168.1.6:8888' + htmlUrl); //本机ip
});