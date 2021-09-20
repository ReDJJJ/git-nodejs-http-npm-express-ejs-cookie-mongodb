// 练习
// GET /table 响应一个表格 并实现隔行换色(JS)
// 浏览器以get请求 路径为table ,服务端返回有一个带有表格的网页,此表格隔行换色(js实现换色)


let url = require('url');
let fs = require('fs');


require("http")
.createServer((req,res) => {
    let method = req.method;
    let pathname = url.parse(req.url).pathname;
    if( method === 'GET' && pathname === "/table"){
        //跳转到该表格页面
        let htmlstr = fs.readFileSync(__dirname+'/12.index.html',{flag:"r"});
        //通过将服务端本地的html文件写入响应体,让浏览器渲染响应体的方式进行页面展示
        res.end(htmlstr);
        
    }else{
        // res.write和res.end不会覆盖,而是会叠加;
        
        //居然有下载的功能？？？buffer格式作为响应体
        //Buffer 要大写
        // let bf1 = Buffer.alloc(10);
        // let bf2 = Buffer.allocUnsafe(10);
        // let bf3 = Buffer.from('ABCDEFG');
        // res.write(bf1);
        // res.write(bf2);
        // res.write(bf3);
        res.end("404");
    }
})
.listen(80,()=>{
    console.log("服务已经启动");
});

//以前各种前端效果都是本地写在html文件当,而显示生活中都是html文件在服务器当中,客户端访问固定网址发送请求的时候,服务器在服务端本地取出html文件(读取),在放入响应体当中返回给客户端;
//但是这种有缺点,就是变色代码的运行是在客户端浏览器上运行的,而不是在服务端就完成了,而服务端性能远远强于客户端,应该利用服务端的资源对网页进行渲染,再将内容返回;