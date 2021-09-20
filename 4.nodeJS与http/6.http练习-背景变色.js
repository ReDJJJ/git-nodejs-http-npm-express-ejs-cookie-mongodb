// html文件
let str =
`
        <style>
        body{background-color: pink;}
        </style>
`



//开启http服务
require("http")
.createServer((req,res)=>{
    //深度理解: (REQ,RES)=>{} 是createSever的第一个参数(是一个函数);
    //行
        res.statusCode = 201;
        res.stautsMessage = "ok";
    //头
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        //表示响应体的格式 不加导致中文乱码 //或者在html中添加<meta charset="utf-8"> 也行 
        //而setHeader("Content-Type", "text/html;charset=utf-8");这种设置方法设置响应字符集 优先级跟高 
    //体
        //需求:访问http服务，返回一个粉色背景的界面,顺便加一个标题;
        res.write(str);
            //这种直接插入css代码,浏览器能识别,但是感觉很奇怪,因为不是完整的HTML代码
        res.end();
})
.listen(80,()=>{
    console.log("http端口监听已经启动,80端口");
})