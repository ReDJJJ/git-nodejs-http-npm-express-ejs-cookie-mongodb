//路由器 Router 路由器

// Router是什么
//    Router是一个完整的中间件和路由系统,也可以看作是一个小型的app对象
// 路由器就是将路由规则作单独的抽离,放入单独的文件管理

// 个人理解:就是把路由规则集抽离放入另外js文件当中;

// 主文件 照常用express框架创建 http服务

const express = require("express");
const app = express();
const router = require("./10routes/router");
//引入简写:JS JSON NODE 其余以js格式解析

//创建静态资源中间件 
// app.use(express.static(__dirname+"/public"));

//创建路由器步骤
        // 创建路由器routes文件夹,里面可以创建多种路由器集合文件(js);
        // 添加路由器文件代码(四部 引入express 创建router微型app对象 添加路由规则 暴露router对象)
        // 主文件 引入路由器文件
        // 主文件声明中间件 

app.use(router.router);//第一个router是exports暴露返回的对象,第二个router是对象的方法
app.listen(80);
