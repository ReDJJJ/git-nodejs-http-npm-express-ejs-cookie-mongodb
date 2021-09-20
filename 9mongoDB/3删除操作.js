//mongodb 修改监听端口 启动命令加参数  mongod --port=端口号
// 则连接mongo服务的时候 也要加参数 mongo --prot=端口号

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/project");

mongoose.connection.on('open',()=>{

    const StarSchema = new mongoose.Schema({
        name:String,
        age:Number,
        tags:Array
    });

    const StarModel = mongoose.model('stars',StarSchema);

    //删除操作
        //删除单个文档  (删除第一个符合查询条件的文档)
        //xxx.model.deleteOne({查询条件});
        StarModel.deleteOne(
            {name:'洪江'},
            (err,data)=>{
                if (err) throw err;
                data.deletedCount > 0 ? console.log('删除成功') :  console.log('删除失败');
                console.log(data);
                //在删除delete系列中,回调函数中的data不是文档的内容,而是删除操作的信息
                //{ deletedCount: 0 }
        });
        //删除多个文档  (删除all符合查询条件的文档)
        //xxx.model.deleteMany({查询条件},(err,data));
})