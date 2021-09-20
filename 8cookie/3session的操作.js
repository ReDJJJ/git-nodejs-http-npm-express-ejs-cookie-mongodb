const express = require('express');
const app = express();

//session的操作 依赖 express-session 工具包

//1 安装引入 express-session工具包
const session = require("express-session");

//2 设置中间件 (中间件的含义后续了解)
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

// 注意: 引用了express-session这个包;
// 将用户属性打包成对象并分配id的这个过程将自动执行,不需要我们手动去指定;


//设置session 一般在用户登录之后会设置session
app.get("/set-session", (req, res) => {
    //语法  req.session.属性名 
    req.session.name = "洪江";
    req.session.age = 23;
    res.send("设置session");
});
//查询session 检测用户是否登录  需读取session
// 读取请求中cookie的id值,若id值没有,则在此网站没有登录或者没有注册
// 若有,则返回登录后的页面;
app.get("/get-session", (req, res) => {
    //语法  和设置一致 req.session.属性名
    console.log(req.session.name); //洪江
    console.log(req.session.age);   //23
    res.send("查询session"); 
});

//销毁session
//语法: req.session.destory(回调函数)  //当成功销毁时候会触发回调函数
app.get("/session.destory", (req, res) => {
    req.session.destroy(()=>{
        console.log("成功销毁");
        res.send("成功退出");
    });
});

//先设置 后查询 再消费 后查询
// 洪江
// 23
// 成功销毁
// undefined
// undefined

app.listen(80);


//安全隐患:
// 退出是以直接关闭网站的形式退出,不安全
// 此时服务端还保存用户登录时候的session 
// 若第三方劫持了客户端的cookie,利用客户端的cookie向客户端发请求
// 则服务端会认为第三方是客户端(cookie内包含了session的id);