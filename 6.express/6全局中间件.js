//中间间 就是函数


//需求: 将用户的请求记录在文件 access.log  [2020-12-12 10:22:32] /  [2020-12-12 10:22:32]  以前写过就是记录用户提交form表单的信息;
//以前是使用Date实话出来的对象;  现在可以使用moment.js插件,上官网可以查看使用方法;
const time = new Date();
const express = require('express');
const fs = require('fs');
const app = express();
const moment = require('moment');
let str = "";

//1. 声明一个中间件函数 next是一个函数类型的值
let record = function(req,res,next){
    //中间间函数,三个形参,分别为请求对象 响应对象 和next
    //next函数是干嘛的? next是一个函数,执行完中间件函数后续有回调函数需要执行(路由规则的回调函数),就必须执行next,否则无法执行路由规则的回调函数
    //人话,next指向路由规则的回调函数
    //还有个疑惑,js怎么知道这是个中间件函数,将请求响应和回调函数赋值给三个形参?
    //老师:确实,单纯如此声明,此函数就是一个普通函数,与路由规则无关,需要中间件的配置
    
    str += `[${moment().format("YY-MM-DD HH:mm:ss")}] `+req.url+`\r\n`;
    fs.writeFileSync("./6.access.log",str,{flag:"a"});

    //调用 next 函数执行后续的回调函数
    next();
}
//2.  中间件的配置
app.use(record);
// 注意:中间件是给所有的路由规则(静态资源也会,应该是所有的请求都会触发中间件)添加,并且会自动执行,无需在路由规则内容自行添加;
app.use(express.static(__dirname+"/public"));

app.get('/', (req, res) =>{
    res.send(`客户端首页`);
    
});

//新增一个路由规则,并且有需求,需要新增的规则也可以向6.access.log文档记录登录时间和path   (路由规则之间功能的复用)
// 笨办法:疯狂复制(冗余度高)  真实办法: 利用中间件函数
app.get('/admin', (req, res) =>{
    res.send(`后台首页`);
});

app.listen(80);

//中间件逻辑:
// 1 声明函数 三个参数(res,req,next)
// 2 声明中间件 app.use(函数);
// 每次请求都会执行中间件函数,next指向各个规则的回调函数