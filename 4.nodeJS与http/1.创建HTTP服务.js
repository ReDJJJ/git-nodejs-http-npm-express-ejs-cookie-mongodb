//利用node.js 启动一个http服务构建一个服务器
// 此服务器专门负责接受HTTP请求,并响应

// 1 引入http模块
const http = require("http");
// 2 调用方法 创建服务对象
const server = http.createServer(function(request,response){
      //http的createServer方法的回调函数中的前两个参数分别是 请求报文的封装对象request 和 响应报文的封装对象response
      //借助request和response两个对象 可以对 http请求和http响应 进行设置 其本身大量属性记载了报文的信息
      response.end("hello http server");
      //在响应报文结束的时候发送 返回 hello http server
})
// 3 启动监听端口 启动http服务 服务端口为8000
server.listen(8000,function(){
    //监听服务启动成功,执行该回调函数
    console.log(`服务已启动,80端口监听中`);
    // 问题? 这个listen是http服务启动成功执行回调还是单独监听端口成功执行回调
    // 看网上的评价,倾向于监听端口服务启动时候 执行回调 
    //  错了!!实际上开启监听,才算开启了http服务(限定端口),否则上面的createServer只是简单的创建了一个服务对象
});

// server.listen(80,()=>{
//     console.log(`服务已启动,80端口(默认端口)监听中`);
// }); 
// server.listen只能开启一个 


//详细的执行过程:
//引入http模块,http方法返回一个http对象,内置大量与http有关的方法与属性
//http对象中方法createServer方法用以创建http服务,createServer方法会返回一个http服务对象;
//createServer方法有一个回调函数,回调函数的前两个参数分别是 request请求对象和response响应对象,两者也内置了大量方法
//http服务对象server内置方法listen用于监听,两个参数,前一个为端口号,后一个为回调函数(当监听服务启动时候执行回调函数);


// //nodeJS require方法是专门用于引入模块的; 其返回值是一个模块对象,模块对象封装了大量方法以供调用
// 简单的http的流程:
        // 建立TCP连接-> Web浏览器向Web服务器发送请求->
        // Web浏览器发送请求头信息—>//请求
        // Web服务器应答->//响应
        // Web服务器发送应答头信息->Web服务器向浏览器发送数据(请求体)->Web服务器关闭TCP连接


//如何使用该文件刚刚创建的http服务端? 用浏览器,浏览器能发送http请求报文node
//在浏览器输入 127.0.0.1:8000

const http = require('http');
const server = http.createSever((req,res)=>{
    //响应头和响应体的操作设置;
})
server.listen(8000,function(){
    //启动服务的作用
});