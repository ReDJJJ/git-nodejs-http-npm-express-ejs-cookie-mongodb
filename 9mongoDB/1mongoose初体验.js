//前端当中,JS与mongoDB进行交互
// mongoose是一个封装了mongodb服务的npm包

const mongoose = require("mongoose");


// 1安装引入 mongoose npm包


// 2连接数据库 connect  
//语法: mongoose.connect("mongodb协议的URL/数据库名",{配置对象}); 若数据库名不存在将进行创建
//配置对象不是必须的,但是会报警告,添加上配置对象即可取消警告,奇怪我这版本不报错;
mongoose.connect("mongodb://127.0.0.1:27017/project");

// 3设置连接成功 回调函数
//语法 mongoose.connection.on("open",()=>{});  绑定open事件;
mongoose.connection.on("open", () => {

    //4声明文档结构结构 (声明文档对象中各个属性以及属性值的结构,规定文档对象的结构(属性名以及属性值的类型))
    //语法: const UserSchema = new mongoose.Schema({文档结构})
    //理解: UserSchema就是 构造化函数mongose.Schema()的实例化对象,而格式就是填入构造函数的参数的格式({});
        //注意: 这个文档结构对象 的结构必须与数据库中对应集合的文档的结构一直;
    const UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        age: Number
    })

    //5绑定集合和文档结构
    //语法: const UserModel = mongoose.model('集合名称',文档结构对象); //若集合不存在接将其创建
    //解析: mongoose.model 返回的也是一个对象,并且此函数规定了 声明的文档结构是哪个集合的文档结构,所以可用声明多个文档结果(new mongoose.Schema),然后将多个集合与文档结构进行绑定;
    const UserModel = mongoose.model('users', UserSchema);

    //6 文档数据操作
        //可用看出来文档对象
    UserModel.create(
        {
            username: 'HJ',
            password: 'SDKJREIS2134',
            age: 200
        }
    ,(err,data)=>{
        if (err) throw err;
        console.log(data);
        //关闭连接
        //mongoose.connection.close();
    });
    console.log("操作成功");
});
// {  //操作的第二个参数data 就是操作的文档对象;
//     username: 'HJ',
//     password: 'SDKJREIS2134',
//     age: 200,
//     _id: new ObjectId("614478212dd3e68ea8e13a04"),
//     __v: 0  //是mongoose自创建的数据
//   }


//mongodb的基本逻辑结构

// 1 引入mongoose 
//const mongoose = require('mongoose');
// 2 远程连接mongoose服务器
//mongoose.connect("mongoose协议URL/数据库名",{配置对象});
// 3 设置连接成功回调函数
// mongoose.connection.on("open", () => {
//     //4创建文档结构对象
//     const xxxschema = new mongoose.Schema({
//         声明文档结构
//             name: String,
//         ....
//         });
    
//     //5创建文档模板,绑定集合和文档结构
//     const xxxmodel = mongoose.model("集合名",文档结构对象);

//     //6 数据操作(此处为插入操作)
//     xxxmodel.create({
//         //依照文档结构 输入文档内容;
//     },(err,data) => {操作回调函数});
// })