const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    
    //let pathname = decodeURI(url.parse(req.url,true).pathname);

    // if(method === 'GET' && pathname =="/index.html"){
    //     let str = fs.readFileSync("./public/index.html"); 
    //     console.log(str);
    //     res.end(str);
    // }else if(method === 'GET' && pathname =="/css/app.css"){
    //     let str = fs.readFileSync("./public/css/app.css"); 
    //     console.log(str);
    //     res.end(str);
    // }else{
    //     res.end("404");
    // }
    //这种分流办法看似很棒,但是比较死板,需要针对每一个不同的请求设置不同的else if分支来响应
    // 假若一个页面要引入成千上万个请求(外链巨多的css,png,js),每个都手动写岂不是累死;



    //外链式中,src href会被浏览器塞进请求行中; 所以通过判断请求行的url的pathname可以区分不同的请求
    //个人思路: 注意观察,一般来说,在html文件中外链文件的src href等属性的属性值 就大致对应 外链文件在服务端的存储地址;
    //      也就是说,请求路径和文件路径 大致对应 (一般实际工程也是这样子设置,符合直觉和方便自动化)
    //      所以可以根据请求路径 去拼接 对应的文件路径

    let pathname = decodeURI(url.parse(req.url,true).pathname);
    let filepath = __dirname + "/public" + pathname;
    // 实际开发中 会将__dirname + "/public" 放入一个变量directory当中,一般为网站的根目录
    // 网站根目录:请求过来后,找寻文件的最大公倍文件


    //服务端每次接收到一个请求,就到/public文件夹下搜寻文件,若有响应文件内容,若无响应404状态码
    fs.readFile(filepath,function(err,data){
        //若有错误(例如路径不存在)
        if(err) {
            res.statusCode = 404;
            res.statusMessage = "not found";
            res.end("404 NOT Found");
        }else{
            //响应文件内容,让浏览器自己解析去吧
            res.end(data);
        }
    })

}).listen(80,() => {
    console.log('启动');
})