// 网站根目录 
// 网站所有信息的源地址 之前的例子就是  __dirname+'/public' ,网站所有文件都放在这个目录之下; 
// 客户端给服务端发送请求,而服务端就会去网站的根目录下寻找所需内容,然后放在响应体中响应回去,然后客户端接收响应体;

// 浏览器填入 https://127.0.0.1/login.html , 若没有设置网站根目录,网站则在服务端nodejs所在的目录查找,若设置了根目录则在根目录中查找login.html

const express = require("express");
const app = express();

//配置网站的根目录
// 语法 app.use(express.static("根目录路径"));

// 注意,设置了根目录后,浏览器请求中请求行中url的pathname(路径)将直接与/public目录中的文件进行匹配,若匹配成功,则响应体包含文件内容进行返回,若pathname为"/",会默认的寻找index.html 
// 注意: 若此时没有设置任何的路由规则 ! 浏览器发送 http://127.0.0.1/hello.html  仍然起作用,因为设置了网站根目录,并且根目录下有hello.html这个文件
// 在实际开发中: 框架HTML 框架CSS 框架JS 图片视频音频 一般都会放在网站的根目录下面,因为长时间变化不大; 而变化比较频繁的文件,则使用路由规则,在其回调函数中进行数据处理,将数据与html拼接,再将数据响应给浏览器
//其优先级比路由规则同级,看代码中的顺序;
app.use(express.static(__dirname+"/public"));


//网站根目录和路由规则是可以共存的!添加后,若pathname既不和/public下面的匹配,又不和/home.html的匹配,就会返回404
//与/public下面的匹配则将文件内容打包到响应体随着响应体返回(与express中的response.sendFile方法一致), 若与/home.html匹配,执行回调函数;
app.get("/home",(req,res)=>{
    res.send("express中send方法自动追加请求行,中文不会乱码");
});

app.get("/5.chongtu.html",(req,res)=>{
    res.sendFile(__dirname+"/5.chongtu.html");
});



app.listen(80,() =>{
    console.log('listening on 80 port...');
})


//目前 有两个缩写 一个是action中的缩写, action缩写会直接在url后续添加action的值
//     还有一个是require中的缩写,会寻找JS,JSON,NODE 然后其余当作js文件以js语法解析;
