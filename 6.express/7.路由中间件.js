//上节课的中间件是全局的,所有路由规则和静态资源访问都会执行中间件

const moment = require('moment');
const fs = require('fs');
const express = require('express');
const app = express();
let str = "";
const time = new Date();

//1.路由中间件,只针对某些路由规则,中间件生效
let checkUser = function(req,res,next){
    let {admin=0}  =  req.query ; //使用解构赋值,admin默认值为false
    if(admin == "1"){
        next(); 
        //符合条件,执行路由规则的回调函数
    }else{
        //跳转到登录页面
        //假若是全局中间件,会导致无限循环,因为admin!=1就倒转到 /login 而/login也没有admin这个参数
        res.redirect("/login");
    }
}
//2 此处为全局中间件; 
// app.use(checkUser);
//3 路由中间件,想让中间件在哪个路由规则中生效,则在路由规则的第二个参数中添加上 中间件函数


app.get('/', (req, res) =>{
    res.send(`用户首页`);
});
app.get('/home', (req, res) =>{
    res.send(`网站首页`);
});
app.get('/login', (req, res) =>{
    res.send(`登录首页`);
});

//提出需求 只有管理员才能访问后台, 管理员身份体现在url中查询字符串中有参数 ?admin=1 
//所以中间件的需求出现了  请求访问所有后台,需要判断是否为管理员;
//中间件函数写在路由规则的第二个参数
app.get('/admin',checkUser, (req, res) =>{
    res.send(`后台首页`);
});
app.get('/setting',checkUser, (req, res) =>{
    res.send(`后台设置`);
});

app.listen(80);


//中间件应用场景1
//1检测用户身份到底满足不满足条件,若满足中间件next()执行回调,不满足在中间件中执行跳转,跳转到登录页面或者提示