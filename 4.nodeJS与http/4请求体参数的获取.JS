//提取请求体的数据

const http = require("http"); 
const qs = require("querystring");
const server = http.createServer((request, response) => {
    //提取请求体数据 (只有POST方法的请求才有可能有请求体,GET方法请求体是空的)
    //思考:怎么样才能发出POST方法的请求呢? 默认的都是GET方法
    //个人思路:使用form表单将其method属性设置为post
    //然后呢?设置之后怎么样往http服务端发送post请求呢?
    //form表单上面还有个属性action; 其属性值就是指向表单提交的目的
    //提取请求体数据

    //1 声明一个字符串变量
    let reqBody = "";
    //2 request绑定data事件
    request.on("data", chunk => {
        reqBody += chunk.toString();
        //请求体内容将会通过读取流自动赋值给data事件的第一个参数
        //request.on相当于绑定了读取流事件,每一次有数据读取,就会存储到chunk这个参数(buffer的形式)
        //request的data事件会将请求体切割 逐块分给chunk ,在进行字符串拼接即可
    });
    //3 绑定end事件
    request.on("end", () => {
        //触发request end 事件 代表body已经完全接受了请求体 请求报文处理完成
        console.log(reqBody);
        response.end("readreqbodyalreadyfinish");
        //响应的end不能放在外面,不符合语义,应该是读取完请求体了,服务端再发出响应报文;
        
         // username=HJ&pwd=12345 打印的结果 是一整个字符串 不方便提取请求体(查询字符串)的内容
        // 和细分请求行中url 思路一致 , 引入queryString模块再利用模块中parse解决细分请求体的问题
        console.log(qs.parse(reqBody));
        //打印qs.parse(reqBody)结果:[Object: null prototype] { username: 'HJ', pwd: '123' }
    })
})

server.listen(80, () => {
    console.log("服务器启动,80端口监听");
})