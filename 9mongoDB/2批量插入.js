// 文档结构支持的数据类型 : String Number Date Buffer Boolean Mixed(任意类型) Objectld(文档编号) Array Decimal128(高精度数字)

// 引入mongoose
const mongoose = require('mongoose');

// 连接mongodb服务                          数据库名称
mongoose.connect("mongodb://127.0.0.1:27017/project");

// 绑定连接成功回调
mongoose.connection.on("open",function(){
    //实例化文档结构对象
    const StarSchema = new mongoose.Schema({ //构造函数大驼峰
        name:String,
        age:Number,
        tags:Array
    })

    //创建文档模板                   集合名称
    const StarModel = mongoose.model("stars",StarSchema);
    //操作  (批量插入)  在原生mongodb中不能批量插入,只能插入单个
    StarModel.insertMany([
    {
        name:'蔡徐坤',
        age:22,
        tags:['唱','跳','RAP']
    },
    {
        name:'蔡徐坤',
        age:21,
        tags:['唱','跳','RAP',"打游戏"]
    },
    ],(err,data)=>{
        if(err) throw err;
        console.log(data);
        //选做 
        //mongoose.connection.close();
    })
}) 


// 批量插入 和 单个插入逻辑类似,只是各自方法不同,参数的形式不同;
//单个插入 文档模板对象.create/insert(文档对象,(err,data)=>)  
//批量插入 文档模板对象.insertMany(文档对象数组,(err,data)=>)