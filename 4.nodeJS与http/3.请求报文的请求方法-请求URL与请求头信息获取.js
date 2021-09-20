//2的js请看word文档(2不太重要)

// 服务端许多时候需要提取请求报文中的内容

// 引入http服务模块
const http = require('http'); 
// 引入url模块
const url = require('url'); 

// 创建服务对象
const server = http.createServer((request,response) => {response.end("hello http");
    // 获取请求报文中的内容(行头体)
    
    //获取请求行的内容
    //1 获取请求报文请求行的类型
    console.log(request.method);
    //2 获取请求报文请求行的URL
    console.log(request.url);
  
    // GET  //3 获取请求报文请求行的http版本类型
    console.log(request.httpVersion);
    console.log(request.headers);
    //浏览器输入localhost打印结果:
    // /
    // 1.1
    //浏览器输入localhost/admin/login?admin=hj&paw=123455打印结果:
    // GET
    // /admin/login?admin=hj&paw=123455
    // 1.1

    
    //可以看出 request.url可以获取url,但若只想获取url中某一部分(例如查询字符串(查询参数)),该怎么办? 
    // 拆分获取请求行中URL中参数(路径和查询字符串)
            //1 引入url模块
            //2 使用url模块中的parse方法
            // console.log(url.parse(request.url)); 
                    // url.parse(URL)的输出结果 
                    // Url {
                    //     protocol: null,
                    //     slashes: null,
                    //     auth: null,
                    //     host: null,
                    //     port: null,
                    //     hostname: null,
                    //     hash: null,
                    //     search: '?admin=hj&paw=123455',
                    //     query: 'admin=hj&paw=123455',
                    //     pathname: '/admin/login',
                    //     path: '/admin/login?admin=hj&paw=123455',
                    //     href: '/admin/login?admin=hj&paw=123455'
                    //   }

                    // 输出结果为URL对象,里面包含很多的属性 可以看到 pathname就是路径 query就是查询字符串部分


                // 假若还要更加细分获取查询字符串内容 比如admin=hj这个键值对怎么办?
                // 语法 url.parse(URL,true) parse添加第二个参数 true此时再url.parse的基础上,将查询字符串query再细分为对象;
                console.log(url.parse(request.url,true)); 
                    //url.parse(URL,true)输出结果
                    // Url {
                    //     protocol: null,
                    //     slashes: null,
                    //     auth: null,
                    //     host: null,
                    //     port: null,
                    //     hostname: null,
                    //     hash: null,
                    //     search: '?admin=hj&paw=123455',
                    //     query: [Object: null prototype] { admin: 'hj', paw: '123455' },
                    //     pathname: '/admin/login',
                    //     path: '/admin/login?admin=hj&paw=123455',
                    //     href: '/admin/login?admin=hj&paw=123455'
                    //   }
                //可以看到再url.parse(url)的基础上,query属性的属性值(查询字符串)裂开成为了对象;

            //个人练习,查询请求报文中的方法 http版本,路径,查询字符串,和细分查询字符串
            // console.log('AAA'+request.httpVersion);
            // console.log('AAA'+request.url);
            // console.log('AAA'+request.method);
            // console.log('AAA'+url.parse(request.url).pathname);
            // console.log('AAA'+url.parse(request.url).query);
            // console.log('AAA'+url.parse(request.url,true).query["admin"]);

            // AAA1.1
            // AAA/admin/login?admin=hj&paw=123455
            // AAAGET
            // AAA/admin/login
            // AAAadmin=hj&paw=123455
            // AAAhj
                   
                
});

// 创建监听并启动http服务
server.listen(80,()=>{
    console.log("http服务启动,80端口监听中");
});

// URL中 ?作为路径和查询字符串(参数)的分隔符 例子:localhost/admin/login  ? admin=hj&paw=123455

