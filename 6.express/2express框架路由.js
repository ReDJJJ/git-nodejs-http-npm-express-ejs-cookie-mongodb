// 路由Route :  如何定义应用的端点(URI) 以及 如何响应客户端的请求
// 路由 :  有URI 、 HTTP 请求(GET、POST等) 和若干个句柄组成的;

// 人话 :  将信息由源地址 传递 到目的地的角色 就是路由(决定报文去向的角色)
//           nodejs当中,就是将 客户端请求 交给 指定的回调函数去处理 (分流,分配)


const express = require("express");
const app = express();

//创建路由规则
app.get("/", function(requset,response){// 如果http请求为 GET请求 URL为/ 则响应此回调函数;
    response.send("路由页面");
});

app.get("/admin",function(requset,response){
    response.send("后台页面");
    //send方法是express 封装的响应的方法,自动设置了响应头 设置了响应体类型
    //send相当于自动补齐 res.setHeader("Content-Type","text/html;charset=utf-8");
});

app.get("/login", function(requset,response){// 如果http请求为 GET请求 URL为/ 则响应此回调函数;
    response.send("登录页面");
});

app.post("/login", function(requset,response){// 如果http请求为 GET请求 URL为/ 则响应此回调函数;
    response.send("登录处理");
})

    //all 方法 get post 方法都可以响应 不限定
app.all("/test", function(requset,response){
    response.send("app.all方法的响应");
});
    
app.listen(80,function(){
    console.log("80端口监听中.. http服务已启动...");
});

// 重点看路由(个人理解:请求分流器): 应用对象.请求方法("pathname", function(requset,response));
// 就是以前的分流逻辑模型语法糖, 以前是根据 req.method url.parse(req.url,ture).pathname query 等来进行信息的获取,然后分配到不同的响应;


