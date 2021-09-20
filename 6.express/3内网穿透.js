// 利用utools提供的工具完成内网穿透 
// 内网穿透 插件已经 不见了  算了吧 
// 内网穿透 , 让外网能够访问本机的服务;


// 首先编写一个正常的 http服务 利用express框架编写

const express = require('express');
const app  = express();
app.all("/", function(req, res) {
    res.end("hello 内网穿透选手");
});

app.all("/login", function(req, res) {
    res.end("hello login页面哦");
});

app.all("/admin", function(req, res) {
    res.end("hello admin主页面");
});

app.listen(80);

