//相对路径缺点:相对的是命令行终端所在的路径
//绝对路径缺点:移植性差,不可能每个人的电脑的路径都与开发者的绝对路径一致

//因此 把绝对路径写活 就是迫切需求的刚需;

//特殊的变量__dirname
//__dirname是js中的全局变量 __dirname永远保存的是当前文件(js代码文件)所在文件夹的绝对路径
//所以保证了绝对路径的安全性(不受命令行窗口所在路径的影响)又具有可移植性(时刻记录变化的绝对路径);

console.log(__dirname);

// PS C:\Users\AIR15 2021\Desktop\前后端交互阶段\nodeJS> node .\18路径.js
// C:\Users\AIR15 2021\Desktop\前后端交互阶段\nodeJS
// PS C:\Users\AIR15 2021\Desktop\前后端交互阶段> node .\nodeJS\18路径.js
// C:\Users\AIR15 2021\Desktop\前后端交互阶段\nodeJS


 const fs = require('fs');
 fs.writeFileSync(__dirname+"/index2.html","abc");