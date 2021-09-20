//创建路由器文件
    //1引入express 
    //2创建router对象  express.Router()
    //3编写路由规则
    //4暴露router对象

const express = require('express');
const router = express.Router(); //注意,此处Router的R大写
//创建router对象,router对象是一个微型app对象(微型服务对象),也是个中间件函数

//填写路由规则
router.get('/', function(req, res) {
    res.send("客户端首页");
})
router.get('/login', function(req, res) {
    res.send("登录页面");
})
router.get('/admin', function(req, res) {
    res.send("后端页面");
})


//暴露router对象
exports.router = router;
//语法解析 exports暴露一个对象,此对象的router属性指向express.Router()创建的对象