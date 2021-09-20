// request对象 
// 在express 中如何获取请求的参数

// 安装express
const express = require('express');  const url = require('url'); const sr = require('querystring');
const { request } = require('http');
const { response } = require('express');
// 创建应用对象
const app  = express();
//  设置路由
app.get("/", (request, response) => {
    response.end("123");
});

app.get("/req", (req, res) => {
    // 在原生http中,我们学习了获取请求报文的信息 
    // 1 获取请求方法  req.method
            console.log(req.method);
    // 2 获取请求的url req.url
            console.log(req.url);
    // 3 获取请求http版本 req.httpVersion
            console.log(req.httpVersion)
    // 4 获取请求头信息  req.headers   
            console.log(req.headers);
    // 以上 在express框架下  和 原生http一模一样



    // 5 获取查询字符串组成的对象  url.parse(req.url,true).query
            console.log(url.parse(req.url,true).query);
    //          express中 : req.query    req.query存的就是url中查询字符串形成的对象
                console.log(req.query);

    // 8 获取请求头中指定key对应的value  request.get(key)
        //请求头有许多键值对组成,像查询请求头中的某个键值对的值,可以使用request.key(key)方法
            console.log(req.get('host'));
            console.log(req.headers.host);
            //其实没有这个方法,查询request.headers这个请求头对象也可;

});

app.all("/news/:number.html",(req,res)=>{
    //日常开发中,若网页/new目录下有许多新闻,每个新闻占据一个html,
    //但是如果每个新闻页面都在id中写死了数字XXX.html,如/new/100.html那样子很不好不灵活
    // 可以在url当中 使用(占位符)  语法 (:标识符)   组合来指代任意字符 

    // 6查询url中的路径参数(可变参数)  request.params.参数名
        console.log("参数为:"+req.params.number);
        res.send("当前id为:"+req.params.number+"的新闻信息");
});
    //6在实际开发中很常用 个人称为url占位符 例如电商平台 某一类商品归为同一个目录 http://ip/键盘/xxxx.html
    // 若每款键盘都独立写死xxxx 如nj68.html fl680.html 那么获取url中的键盘型号参数相当不方便,因为键盘型号参数都嵌入为 url.parse(req.url).pathname当中了
    // 此时就可以url 中的占位符 (:标识符)  配合 request.params.标识符来查询;


//   监听端口 启动服务
app.listen(80,()=>{
    console.log("服务已经启动...端口80监听中");
});

