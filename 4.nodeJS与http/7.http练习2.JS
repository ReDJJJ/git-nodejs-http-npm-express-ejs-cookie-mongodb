//6.js代码是运行在服务端,浏览器接受服务端发送的响应体后,解析其中的html文件;

//7.js代码是客户端向浏览器端发送请求,指定变换的颜色;
// http://127.0.0.1/?bg = rgb(0,10,100);

// 思路:首先需要获取查询pathname获取路径


const http = require("http"); 
const url = require("url");
let str = ""; 
//此处本人犯了个愚蠢的错误: 弄错了url和querystring 两个模块的功能 url是针对请求行中的url的,而querystring是用来针对请求体(post) 一般用于表单验证
//但是qs此处也可以正常解析url是因为,url过于简单,加入url复杂一点,/index/png/?A=123&B=123;
// { '/index/png/?A': '200', b: '200' } 解析结果就不符合了
// 况且qs模块在使用parse解析请求体的时候,还需要on data事件接受分块的请求体;然后再进行解析;

const server = http.createServer((req, res) => {
    if (req.url !== "/favicon.ico") { //过滤浏览器默认请求
        res.setHeader("Content-Type", "text/html;charset=utf-8");

        str = url.parse(req.url,true).query["bg"];
        console.log(str);
        //只写style标签内的内容也可以生效,但是不是一个标准的html文档
        res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <style>
                    body{
                        background:${str};
                    }
                </style>
            <head>
            <body>
            </body>
        </html>
    `);
    }
});
server.listen(80, () => {
    console.log("listening:80")
});
