//引入内置模块 直接填入模块名即可
require("fs");

//引入第三方npm包,需要预先安装npm包位于node_modules文件夹当中,并且具有向上寻找特性
require("jquery");
//本质上 require(第三方工具包) 等同于 require('.../node_modules/dist/jquery')  //引入一个文件夹: 会寻找jquery文件夹中package.json中的main属性指向的文件


// 引入npm包的时候,如当前文件夹下没有node_modules文件或者node_modules文件下没有npm包 ,会自动向上寻找(直到找到根目录)
//jquery是在index.js同级目录下的安装的npm包(同级node_moduels目录)
//而vue是index.js所在目录的父级目录的node_module目录下安装的npm包
require("vue");
