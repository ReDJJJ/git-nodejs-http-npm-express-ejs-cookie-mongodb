 // res.setHeader('Content-Type', 'text/html;charset=utf-8');

    // if(method === 'GET' && pathname === '/login'){
    //     res.end("登录页面");
    // }else if(method === 'GET' && pathname === '/register'){
    //     res.end("注册页面");
    // }else{
    //     res.end("<h1>404 Not found</h1>")
    // }//其余所有情况当作404处理;
    //以上就是页面跳转的基本逻辑 ,但是实际开发当中不可能就是4个大字 登录页面和注册页面;




const http = require('http');
const url = require('url');
const fs = require("fs");
const server = http.createServer((req, res) => {
    let { method } = req;
    let pathname = url.parse(req.url, true).pathname;
    //蠢方法:直接在write或者end方法内写入html代码;
    //可行方法:将登录页面和注册页面独立放在一个HTML文件
    //在end方法中读取html文件的内容并当作end方法的参数;
    //进行整页的替换(后续的ajax就是为了解决这个痛点)
    if (method === 'GET' && pathname === '/login') {
        fs.readFile(__dirname + '/9.login.html', { flag: 'r' }, (err,data) => { res.end(data); });
        //本人在此犯错: 将readFile和readFileSync 弄混; readFileSync由于没有回调函数,返回值是读取的数据,需要用一个变量接收
        //而readFile的读取结果存储在回调函数内容的第二个参数当中，一般起名叫做data 和on事件中的chunk逻辑类型,只不过on事件的chunk是分块的;
    } else if (method === 'GET' && pathname === '/register') {
        let rs = fs.createReadStream(__dirname+`/9.register.html`);
        let register = ""
        rs.on('data', chunk => {
            register += chunk;
        });
        rs.on('end', () => res.end(register));
    } else {
        res.end("<h1>404 Not found</h1>")
    }
});
server.listen(8000, () => {
    console.log("启动服务");
});

//!!!!!!!!这种将代码写在独立html,在读取发送响应的方法,可以实现简单的"热更新",
//不用重新启动http服务,更改html文件就可以更新页面,这是因为每次跳转到读取页面都会读取html文件的内容;

//!!!!!!!!以上就是实现页面跳转的简单demo!!!! 其实说是跳转页面,其实是不断地替换当前页面的HTML代码;