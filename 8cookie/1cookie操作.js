//cookie操作 要使用工具包 cookie-parser
//cookie-parser 和 body-parser 使用方式大同小异

//使用cookie-parser的前提是安装cookie-parser工具包 和 安装了 express 框架

const express = require('express');
const app = express();
//第一步 引入cookie-parser包
const cookieParser  = require("cookie-parser");
//第二部 声明cookie-parser中间件  body-parser的中间件声明更加特殊 app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
            //在来回顾以下 
            //首先app.use(function(req,res,next)); cookieParser()返回了一个三参数方法,并且给res req等报文对象添加了一些属性或者方法

app.all("/setcookie", (req, res) => {
    //cookie-parser中间件为req添加了cookie属性,为res添加了cookie方法

    //设置cookie res.cookie("cookiename","cookievalue"), 支持同时设置多条cookie
    res.cookie("email","cookievalue");
    res.cookie("username","洪江");
    //访问 /setcookie路径的响应头中 :
    // Set-Cookie: email=cookievalue; Path=/     Set-Cookie: username=%E6%B4%AA%E6%B1%9F; Path=/
    // 此次设置之后,以后浏览器访问 127.0.0.1/setcookie 就会将以上两个cookie打包在请求头中,发送给服务端

    //设置带有时效性的cookie  res.cookie("cookiename","cookievalue",{maxAge:xx}); 代码中单位为ms  浏览器中单位为s
    res.cookie('TIMECOOKIE','TIMECOOKIE',{maxAge:20000});
    //TIMECOOKIE=TIMECOOKIE; Max-Age=20; Path=/; Expires=Thu, 16 Sep 2021 12:10:31 GMT

    //注意: 带时效性的cookie,关闭浏览器不会销毁此cookie 直到时间周期到
    //      而不带时效性的cookie,关闭浏览器就会销毁此cookie
    //      所以用户登录的时候,一般会设置一个cookie 
    //      怎么理解 不带时效性的cookie,关闭浏览器就会销毁？
    //      当重新打开浏览器,查看访问/setcookie的请求报文(重启后第一次请求),发现请求头只包含 具有时效性的cookie,并没有包含 关闭浏览器前没有时效性的两个cookie;
    //     个人问题:cookie明明会保存在本地,又会被销毁?是怎么回事
    //////////////////////////////// 
    //      个人理解:一直保存到本地的cookie是时效性的cookie,只不过时效特别长或者是0(永久)
    //              而非时效性的cookie 关闭浏览器就会重置清除;
    res.send("ABC");
})

app.get("/getcookie",(req,res)=>{
    //cookie的读取
    //首先还是安装引入 cookieparser模块 ,然后声明中间件， req.cookies 返回一个cookies内容的对象
    console.log(req.cookies); //此处有s
    res.send('读取cookie');
    //{ email: 'cookievalue', username: '洪江', TIMECOOKIE: 'TIMECOOKIE' }
    //由于本次所有cookie的paht都是/ 所以在本网站所有目录cookie都生效;
});

app.get("/clearCookie",(req,res)=>{
    //cookie的清除
    res.clearCookie("email");
    //清除的本质原理是设置一个已经过期的时间,让浏览器自动清除cookie;
    console.log(req.cookies);
    res.end("清除cookie");
});


app.listen(80,() => {
    console.log("listening on port 80");
});