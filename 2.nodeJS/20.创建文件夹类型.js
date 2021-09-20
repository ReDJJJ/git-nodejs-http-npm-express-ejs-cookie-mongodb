//引入文件系统
const fs = require('fs');

//在当前目录创建文件夹/project
// 细节:创建文件夹不能越级创建 例如在没有/project文件夹的情况下创建/project/images文件夹
////////////////////////////////所以将创建images的过程放在创建/project函数的内部,确保images创建的时候/project也创建成功了
fs.mkdir(__dirname + '/project', err => {
    if (err) throw err;
    console.log("创建/project文件夹");

    //疑惑:writeFile系列能建文件,能不能顺便创建文件夹呢? //不能 会导致报错！！！//必须先创建文件夹
    fs.mkdirSync(__dirname + '/project/images');
    fs.writeFile(__dirname + "/project/images/logo.png", '', { mode: 0o666 }, err => {
        if (err) throw err;
        console.log("创建了/project/images/logo.png");
    });

    fs.mkdirSync('./project/css');
    fs.writeFileSync(__dirname + '/project/css/app.css', '');
});
