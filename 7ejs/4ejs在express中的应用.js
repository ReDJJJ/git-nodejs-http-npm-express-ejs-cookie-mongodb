let player =[
    {id:1,name:"abc"},
    {id:2,name:"abc"},
    {id:3,name:"abc"},
    {id:4,name:"abc"}
];

//ejs模板文件是什么?就是包含ejs语法的html文件

//需求:数据分离模式显示一个表格(利用ejs)
//在express中,ejs有独到的使用方式,配置设置ejs然后直接响应ejs文件,就不用引入ejs模块,使用ejs.render,而是使用res.render (原因是安装了ejs模板引擎,并配置express使用ejs模板引擎);
//使用步骤:
//1设置ejs为express使用的模板引擎
//app.set("view engine", "ejs");  // app.set是设置express配置的,app.set("属性名","属性值"), 而res.set()是express中设置响应头的
//2设置ejs模板文件的存放位置(文件夹)
//app.set('views',"./4.ejs模板");  // app.set("view","ejs模板文件文件夹");
//3在设置的文件夹下(第二步设置的位置)创建ejs模板文件
//4设置模板响应
//在路由规则中使用 res.render("ejs文件在ejs模板文件夹下的相对路径",数据);


const express = require('express');
const app = express();

//设置ejs为express模板引擎
app.set("view engine","ejs");
//设置ejs模板文件夹所在位置
app.set("views",'./4.ejs模板');


app.get('/', function(req, res) {
    res.render("index.ejs",{player:player});
    //注意res.render此处填写的是ejs文件相对ejs文件夹的位置;
    //{player:player} 由于data必须是对象类型,就声明一个对象,只有一个属性player 其值是player这个数组
});
app.listen("80");