

// 正常引入js文件(有后缀)
const m1 = require("./m1.js");  m1.fn();

// 正常引入json文件(有后缀)
const m2 = require("./m2.json") ; console.log(m2);
// m2 = JSON.parse(readFileSync().toString());
//可以看出,可以直接引入js和json文件,并且JSON字符串会被JSON.parse()成js对象;


//省略后缀引入:
const M1 = require("./m1");  M1.fn();
const M2 = require("./m2") ; console.log(M2);


//假若省略后缀,同时有m3.js 和m3.json 文件，会引入哪个?
const M3 = require("./m3") ; console.log(M3);
//会先引入js文件, 是以js json .node 文件优先顺序引入

//其他文件后以js文件格式解析
const index = require("./index.html");  index.fn();

//引入文件夹情况
//有package.json ,寻找package.json的main属性指向的文件
const libs = require("./libs");  libs.fn();

//无package.json ,寻找index.js和json
const libs2 = require("./libs2");  libs.fn();