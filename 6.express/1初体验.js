// 以下为创建express服务的基本步骤

// 1 安装npm express包
// 2 引入 express 包
    const express = require("express");
// 3  创建应用对象
    const app = express();
// 4  设置路由
    app.get("/",(request,response)=>{
        //设置响应
        response.end("hello express");
    })
// 5   监听端口 启动服务
    app.listen(80,function(){
        console.log("80端口监听中...");
    });


//对比http原生服务,http原生服务是三步   引入 创建服务对象 添加监听
//而express框架是四步  引入 创建应用对象 路由设置 添加监听

// http是 http.createServer(resreq回调函数);  而express是 需要 express()创建一个应用对象,而应用对象.get函数包含resreq回调函数
// express创建路由规则 语法:  app.get or post ("URL.pathname",(res,req)={})
// 此中的 URL 单纯指的是pathname /login/?a=200&,b=200 中 /login就是pathname