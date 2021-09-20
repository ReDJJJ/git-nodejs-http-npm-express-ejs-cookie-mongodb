//构建服务 POST / register 获取用户信息,控制台输出用户输入的信息

//表单提交成功的情况是会发生跳转,而提交不成功就会原地刷新
//提交不成功部分原因 :form属性 method 和 action 没设置好 post 和 目标url 
// post是表单提交的必要请求方法 而url是表单提交的目标网址,表单提交成功后会跳转到该网址;
// 还有一种可能就是input表单元素没有name属性,没有name属性的表单元素不会被提交

//在10的基础上增加功能: 保存用户的输入(写文件)

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
    }else if(method =="POST" && pathname ==='/login'){   //登录页面用户提交内容跳转(复杂版本)
        //请求体 获取
        //请求体的获取比较麻烦,需要data事件和end事件的支持
        let str ="";
        req.on("data",data=>{
            str+=data;
        });
        req.on("end",()=>{
            console.log(qs.parse(str));
            //str获取完后 打印出来是这样子username=ASDAS&password=123 ,键值对之间有&间隔,不方便操作
            //此时可以利用 先qs.parse后JSON.stringify 来转换成JSON字符串,方便后续的操作
            let JSONstr = "";
            JSONstr = JSON.stringify(qs.parse(str));

            //将存储文件字符串(JSON串)读出来然后转换成对象
            let txt = JSON.parse(fs.readFileSync(__dirname+"/11.user2.JSON",{flag:'r'}));
            console.log(txt);   
            //将用户输入的数据转换成对象(不然str就是&键值对字符串username=ASDAS&password=12),然后将这个对象塞入存储文件对象的data属性数组中
            txt.data[txt.data.length] = qs.parse(str);
            //由于writeFile第二个参数(内容)只支持buffer数据类型和字符串,所以要将更新过的txt对象又转换成JSON字符串
            txtJSON = JSON.stringify(txt);
            fs.writeFile(__dirname+"/11.user2.JSON",txtJSON,{flag:'w'},function(err){
                //此处flag 不能是a,因为这个格式相当于每次将txt内容整体搬出来,然后在插入内容,再整体嵌入
                console.log("写入成功");
                console.log(JSON.parse(txtJSON));
            });
        })
        res.end("登录成功");
    }else if(method =='POST' && pathname ==="/register"){ //注册页面用户提交内容跳转(简单格式版本)
       
        let str ="";
        req.on("data",data=>{
            str+=data;  
        }); //str ~ A=100&B-200&USER=200的buffer类型;
        req.on("end",()=>{
            console.log(qs.parse(str));
            let JSONstr = "";
            JSONstr = JSON.stringify(qs.parse(str));
            fs.writeFile(__dirname+"/11.user.txt",JSONstr+'\n',{flag:'a'},function(err){ //此处要添加配置对象,否则每一次写入都会覆盖原内容
                if(err) throw err;
            });
        })
        res.end("注册成功");
    }else{
        res.end("404 Not found");
    }

}).listen(80,()=>{
    console.log("服务已经启动");
});