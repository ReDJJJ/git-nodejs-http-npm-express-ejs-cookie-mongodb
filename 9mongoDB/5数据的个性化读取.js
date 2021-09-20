// 自定义读取

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/project");

mongoose.connection.on('open',()=>{
    const StarSchema = new mongoose.Schema({
        name:String,
        age:Number,
        tags:Array
    }); 
    const StarModel = mongoose.model("stars",StarSchema);
        // StarModel.findById('614482f438a99c3c84dddabc',(err,data)=>{
        //     if (err) throw err;
        //     console.log(data);
        // })

        // StarModel.find({name:'HJ'},(err,data)=>{
        //     //find方法中的回调函数的data参数就是读取的文档组成的数组;
        //     if (err) throw err;
        //     console.log(data);
        // })

        //个性化读取
        //个性化读取的四个方面: 筛选列的显示,排序,跳过前n个,限制数量,其实分别对应四个方法;

        //筛选列的显示
        // StarModel.find().select({name:1,age:1}).exec((err,data)=>{
        //     console.log(data);
        // });
        // //语法显示: XXXmodel.find({查询字符串}).select({列选择对象}).exec(回调函数)
        // // 个人解析: 列选择字符串{需要选择的列A的列A名:1,需要选择的列B的列B名:1}
        // //           find(,回调函数) 回调函数后移到select({列选择对象}).exec(回调函数);

        // //选择列排序
        // //语法与select一致
        // StarModel.find().sort({name:1,age:1}).exec((err,data)=>{
        //     console.log(data);
        // });

        // skip(x) limit(x) 跳过头几个符合条件的文档,和限制多少个文档显示
        // StarModel.find().skip(3).limit(5).exec((err,data)=>{
        //     console.log(data);
        // });

        StarModel.find({name:'蔡徐坤'}).select({name:1,age:1}).skip(0).limit(2).exec((err,data)=>{
            console.log(data);
        })
});

