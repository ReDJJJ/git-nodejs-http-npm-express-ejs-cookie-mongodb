//之前有个表格,数据和表格样式分离,那个是在nodejs代码中拼接字符串完成的,无法在独立的html代码中实现这一功能
//因为没有办法将数据导入到独立的html文件当中(为什么不可以在<script>标签嵌入js代码中读文件,进行数据导入呢?)
// 原因:首先,这把渲染过程给了客户端,其次,客户没有装nodejs,他都没有fs等模块,你写的代码客户端都不认识.

//18,就要在独立的html文件中实现数据表格的功能;

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function(req,res){
    let pathname = decodeURI(url.parse(req.url).pathname);  
    if(pathname == "/index.html"){
        res.end("111");
    }else{
        res.statusCode = 404;
        res.end("not found");
    }
})
server.listen(80);