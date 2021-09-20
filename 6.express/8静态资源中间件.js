//静态资源 长时间不会改动的文件
// CSS JS 图片 音频 视频 字体等

//动态资源  内容市场会发生改变
// 首页 列表页 购物车 订单等等

//上小结内容; app.use(中间件函数) , app.use方法的参数是一个函数,app.ues是专门来设置中间件的
//而设置静态资源 app.use(express.static("URL")); 可以看出,express.static的返回值是一个函数
//所以设置静态资源本身就是设置一个中间件函数,  这个中间件作用就是 每一个请求都会先到设置的静态路径寻找是否有匹配的文件

const express = require('express');const fs = require('fs');
const app = express();
// 引入并设置中间件 
const bodyParser = require('body-parser');
const { request } = require('http');
const { response } = require('express');
app.use(bodyParser.urlencoded({extended:false}));

//1 静态资源服务中间件
// 设置之后,每一个请求都会根据url中的路径去 静态资源路径中去匹配; 而网站根目录通常会设置静态资源服务中间件
app.use(express.static("./public"));

//2 请求体参数获取中间件
app.get('/form',(req,res) =>{   //跳转到表单页面
    res.sendFile(__dirname+"/public/form.html"); //sendFile要写绝对路径
}); 

app.post("/login",(req,res) =>{ //对表单提交请求的处理(此处为获取请求体)
    //获取请求体安装需要一个npm包  body-parse 
    // 引入 设置中间件 request.body 就是请求体对象
    console.log(req.body);//[Object: null prototype] { username: '123', password: '123' }
    res.send("请求体获取结束");
})




app.listen(80,()=>{
    console.log("linstening on port 80");
})





// 细节补充 个人对浏览器渲染行为比较疑惑,什么时候进行渲染,什么时候渲染成什么样子?
// html中外链的css,js服务端会发送请求,服务器再响应相应文件回去,浏览器也会进行解析并渲染,因为其是html文档的一部分;
// 测试直接读取 css 和 js 文件并打包到响应体给浏览器,浏览器会怎么样处理
// // 读取js文件 传输过去,浏览器直接下载了js文件
// 读取css文件 传输过去 ,浏览器直接将css变成html中的字符串进行输出
// app.get('/test1',(req,res) =>{  
//     let str = fs.readFileSync("./1初体验.js")
//     res.send(str);
// }); 

//总结: HTML文件中的任何内容都会被浏览器渲染并解析(包括外链式的css js),而单纯的css和js其他文件会渲染成html文本插入到html当中

// bodyParser的本质
// let bodyParser = function(req,res,next){
//     let body = "";
//     req.on('data',chunk=>{
//         body += chunk
//     });
//     req.on("end",()=>{
//         const data =  qs.parse(body); //解析字符串 qs是引入的querystring模块
//         res.body = data; //往res添加一个body对象
//         next();
//     });
// }