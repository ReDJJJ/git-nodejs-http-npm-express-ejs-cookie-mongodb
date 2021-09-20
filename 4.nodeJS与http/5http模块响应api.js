//前面学习如何 获取 请求的行头体
//此处学习如何 设置 响应行头体

//启动http服务的简写
require("http")
.createServer(function(req,res){
    //浅显的理解: end()代表着每一次请求和响应报文的结束,因为其会切断客户端和服务器端之间的本次通信,直到下一个报文的出现；

    // 设置响应行中状态码和状态字符串 res.statusCode  res.statusMessage
            res.statusCode = 404;
            res.statusMessage = "Not Found";
            //HTTP/1.1 404 Not Found

    // 设置响应头    res响应对象中的方法res.setHeader(响应头名,响应头值):
            res.setHeader("Content-Type", "text/html;charset=utf-8");
                    //也可以自定义响应头
            res.setHeader("HJsetHeader","helloworld");

    // 设置响应体  直接res.write("内容");
            //注意:浏览器会根据Content-Type判断响应体的内容类型,例如此处设置了响应头设置了Contenty-Type为html,所以浏览器将write的内容当作html文档,解析并输出成页面,所以wirte("内容")才会出现在页面当中
            res.write("*{background-color:pink}");
            
            res.end("OK");
            //end 方法也可以设置响应体,并且位于尾部;
            //响应体不能为空,若没有手动设置响应体,则end方法第一个参数不能为空字符串;否则会报错 500服务端出错(响应体为空)
})
.listen(80,function(){
    console.log("启动监听端口80;");
});
//require和createSever返回的都是一个对象,所以调用对象的方法来达到执行的目的;省去了额外的变量;


