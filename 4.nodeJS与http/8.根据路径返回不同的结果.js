// 构建服务
// GET /login 响应体返回 登录页面
// GET /register 响应体返回 注册页面

// url.parse(request.url,ture).query是查找 /?a=200&b=200的,而pathname才是查找url中的路径的

//引入http模块和url模块
const http = require('http');
const url = require('url');
//创建服务对象并且开启监听服务
// const server = http.createServer((request, response) => {
//     response.setHeader("Content-Type","text/html;charset=utf-8");
//     if (request.url !== '/favicon.ico') {
//         if(url.parse(request.url, true).pathname == "/login"){
//             response.write("登录页面");
//         }else if(url.parse(request.url, true).pathname == "/register"){
//             response.write("注册页面");
//         }
//         response.end("finish");
//     } 
// })
// 以上的代码可以大体实现功能，但是本人少判断请求行中的请求方法 requset.method
const server = http.createServer((request, response) => { //每一个请求都会进入此函数
    // 可以利用解构赋值
    let {method} = request; //让request对象中method属性的值赋值给变量method


    //根据请求行的内容进行分流
    
    response.setHeader("Content-Type","text/html;charset=utf-8");
    if (request.url !== '/favicon.ico' && method ===  'GET') {
        if(url.parse(request.url, true).pathname == "/login"){
            response.end("登录页面");
        }else if(url.parse(request.url, true).pathname == "/register"){
            response.end("注册页面");
        }else {response.end("<h1>404 not found<h1>");}
    }
})

server.listen(80, () => {
    console.log("监听服务开启:80");
});