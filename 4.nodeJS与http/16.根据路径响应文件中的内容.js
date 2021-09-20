// 创建一个HTTP 服务
// GET /index.html public/index.html 响应内容
// GET /css/app.css  public/css/app.css 响应文件内容

const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    let {method} = req; 
    let pathname = decodeURI(url.parse(req.url,true).pathname);

    //分流
    if(method === 'GET' && pathname =="/index.html"){
        let str = fs.readFileSync("./public/index.html"); //返回文件内容buffer形式
        console.log(str);
        res.end(str);
    }else if(method === 'GET' && pathname =="/css/app.css"){
        let str = fs.readFileSync("./public/css/app.css"); //返回文件内容buffer形式
        console.log(str);
        res.end(str);
    }else{
        res.end("404");
    }
}).listen(80,() => {
    console.log('启动');
})

// 逻辑精简
// 1弄清楚 浏览器会发送多少个请求 
// 2弄清楚 浏览器各个请求的请求行信息

// createServer((req,res)=>{
//     if("第一个请求")
//     else if("第二个请求")
//     ...
// })


// 若不分流,所以请求统一响应 res.end(内容);
// 外链式中 src 和href 要写 协议://ip域名/路径   此处的ip域名是服务器的域名 浏览器会将/路径编码后放入请求行中,还可能有查询字符串也会加入请求行中
// 也可以简写成/路径 也可以,浏览器直接将其整体(/路径)放入请求行中,这样子服务器ip地址改变也不怕了;
// 中文编码后字符串用 decodeURI()解码
// 而服务器接收请求后,读取或者写入文件填入的地址都是针对本地服务器的地址 例如let str = fs.readFileSync("./public/css/app.css");
