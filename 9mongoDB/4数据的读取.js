// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost/project");

// mongoose.connection.on('open',()=>{

//     const StarSchema = new mongoose.Schema({
//         name:String,
//         age:Number,
//         tags:Array
//     });

//     const StarModel = mongoose.model('stars',StarSchema);

    
//         StarModel.deleteOne(
//             {name:'洪江'},
//             (err,data)=>{
//                 if (err) throw err;
//                 data.deletedCount > 0 ? console.log('删除成功') :  console.log('删除失败');
//                 console.log(data);
//         });

// })

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/project");

mongoose.connection.on('open',()=>{
    const StarSchema = new mongoose.Schema({
        name:String,
        age:Number,
        tags:Array
    }); 
    const StarModel = mongoose.model("stars",StarSchema);

    //读取 是文档模型下的方法 find
        //语法  xxxxModel.find({查询规则},(err,data));  //查找所有符合规则的文档 若查询规则为空对象{} 则代表没有规则,展示当前集合中所有文档


        // 系列方法 : findOne findMany findById(第一个参数变成id)
        StarModel.findById('614482f438a99c3c84dddabc',(err,data)=>{
            if (err) throw err;
            console.log(data);
        })

        //此处data就是读取到的数据
        StarModel.find({name:'HJ'},(err,data)=>{
            if (err) throw err;
            console.log(data);
        })
        //{
            //       _id: new ObjectId("61447bec9da9400521b662bc"),
            //       name: 'HJ',
            //       age: 21,
            //       tags: [ '唱', '跳', 'RAP', '打游戏' ],
            //       __v: 0
            //     }
    // [
    //     {
    //       _id: new ObjectId("61447bec9da9400521b662bc"),
    //       name: 'HJ',
    //       age: 21,
    //       tags: [ '唱', '跳', 'RAP', '打游戏' ],
    //       __v: 0
    //     },
    //     {
    //       _id: new ObjectId("614482afb470198a2757157a"),
    //       name: 'HJ',
    //       age: 21,
    //       tags: [ '唱', '跳', 'RAP', '打游戏' ],
    //       __v: 0
    //     },
    //     {
    //       _id: new ObjectId("614482f438a99c3c84dddabc"),
    //       name: 'HJ',
    //       age: 21,
    //       tags: [ '唱', '跳', 'RAP', '打游戏' ],
    //       __v: 0
    //     }
    //   ]

    // 所以从此开始 读取到了数据库里面的信息 有数据可以进行 html和数据的凭借
    });