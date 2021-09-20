//构建服务 POST / register 获取用户信息,控制台输出用户输入的信息

//表单提交成功的情况是会发生跳转,而提交不成功就会原地刷新
//提交不成功两个原因 : method 和 action 没设置好 post 和 目标url 
// post是表单提交的必要请求方法 而url是表单提交的目标网址,表单提交成功后会跳转到该网址;
// 还有一种可能就是input表单元素没有name属性,没有name属性的表单元素不会被提交


// 思路: 先实现/logic /register能够到达不同的页面 后进行POST页面的跳转; 需要form表单action和method属性的配合
// 然后利用req.data事件和req.end事件将用户输入内容赋值给一个变量,此变量再用querystring中的parse方法解析成对象,就可以为所欲为的进行操作了;

const http = require("http"); 
const url = require("url");
const fs = require("fs");
const qs = require("querystring");

http.createServer((req, res)=>{
    let {method} = req;
    let pathname = url.parse(req.url).pathname;
    if(method==="GET" && pathname ==="/login"){ //单纯的跳转到登录页面
        //读取login页面的内容
        let login = fs.readFileSync(__dirname+"/10.login.html");
        res.end(login);
    }
    else if(method==="GET" && pathname ==="/register"){   //单纯的跳转到注册页面
        //读取register页面的内容
        let register = fs.readFileSync(__dirname+"/10.register.html");
        res.end(register);
    }else if(method =="POST" && pathname ==='/login'){   //登录页面用户提交内容跳转
        //请求体 获取
        //请求体的获取比较麻烦,需要data事件和end事件的支持
       
        let str ="";
        req.on("data",data=>{
            str+=data;
        });
        req.on("end",()=>{
            console.log(qs.parse(str));
        })
        res.end("登录成功");
    }else if(method =='POST' && pathname ==="/register"){ //注册页面用户提交内容跳转
       
        let str ="";
        req.on("data",data=>{
            str+=data;
        });
        req.on("end",()=>{
            console.log(qs.parse(str));
        })
        res.end("注册成功");
    }else{
        res.end("404 Not found");
    }

}).listen(80,()=>{
    console.log("服务已经启动");
});