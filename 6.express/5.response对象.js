const express = require("express");
const app = express();
// 本小节学习request对象那个

app.get("/res", (request, response)=>{
    //设置响应状态码
    //response.statusCode = 200;
    //express框架中提供了方法设置响应状态码 response.status(code);
    response.status(404);

    //设置响应状态字符串
    response.statusMessage = "OK";

    
    // 设置响应头
    response.setHeader("Content-Type", "text/css;charset=utf-8"); //会与download的响应头设置冲突
    response.setHeader("week", "san");
    // express中提供 set方法设置响应体 response.set(header,value);
    response.set("header","value");


    // 设置响应体
    response.write("helloworld");
    response.write("HELLOWORLD"); //不会层叠上面的write
    //response.send("123"); //Cannot set headers after they are sent to the client
    response.end("响应");

    //注意: 设置完响应体后不能再设置响应头,否则会报错,所以send方法不能再write方法后使用,send方法自带设置响应头(设置字符);
    //end和write方法写入中文显示到浏览器会乱码,需要设置响应头的Content-Type属性,或者使用express中的send方法
    //response.send("request.send自动追加请求头");
    //response.setHeader("Content-Type", "text/css;charset=utf-8"); 这个设置 response.send方法自动追加此响应头设置

    
})

app.get("/download", function(request, response) {
    //response.download(文件URL); 
    //当启动这个方法,当访问/download的时候就会自动下载文件  
    // 注意:此方法要求比较严格:状态码200状态字符串ok响应头中Content-Type属性需浏览器自动补齐
    response.download("./2.login.html");
    //相当于给服务器发送下载请求,然后服务端再服务器搜寻到文件后封装到响应体发送响应报文给客户端,客户端收到响应报文后保存响应体到客户端电脑硬盘上
    //其实就是一种特殊的响应报文
})

app.get("/sendFile", function(request, response) {
    //response.sendFile(绝对 绝对路径！文件URL); 
    //response.sendFile("./2.login.html");//path must be absolute or specify root to res.sendFile

    //response.sendFile(__dirname + "/package.json"); 
    // json字符串直接打印到了网页当中
    // {
    //     "name": "expresspackage",
    //     "version": "1.0.0",
    //     "description": "",
    //     "main": "1初体验.js",
    //     "scripts": {
    //       "test": "echo \"Error: no test specified\" && exit 1"
    //     },
    //     "author": "",
    //     "license": "ISC",
    //     "dependencies": {
    //       "express": "^4.17.1"
    //     }
    //   }

    response.sendFile(__dirname + "/2.login.html");
    //直接将html解析了,所以sendFile这个方法就是 读取文件的内容,然后返回给浏览器,浏览器会对其进行解析生效(HTML),其余当作字符串,js文件会被下载;
    //原生http这样子做还要读取文件,然后write方法响应回去;
});


app.get("/redirect", function(request, response) {
   //重定向 response.redirect("完整的URL");
    //response.redirect("https://www.baidu.com");
    //网页会跳转到redirect方法的URL;
    //本质原理: 设置响应状态码码为302 和 响应头中 location属性为url,则浏览器接收到该响应后会自动跳转 (其实还有其他设置)
    response.statusCode = 302;
    response.setHeader("Location","https://www.baidu.com");
    //重定向应用场景; 用户点击我的,给我的页面发请求,我的页面服务发现用户没有登录,就发一个重定向响应然后用户重定向到登录页面,而不是我的页面
});

app.listen(80, function(){
    console.log("80端口监听中...");
});


