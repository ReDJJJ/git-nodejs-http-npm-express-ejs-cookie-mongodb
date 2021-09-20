// Buffer (缓冲器)
    // Buffer 是一个和数组类似的对象,不同是buffer是专门用来保存二进制数据的


// Buffer特点:
    // 大小固定: 在创建时就确定了,且无法调整大小
    // 性能较好: 直接对计算机内存进行操作
    // 每个元素大小为1字节 1byte  = 8 bit 
    // 注意打印buffer的内容数字都是十六进制！！！


// Buffer的声明创建
    const buf_1 = Buffer.alloc(10); //创建一个10B的buffer  Buffer.alloc(参数) 参数为buffer的大小,单位为字节
    console.log(buf_1); //<Buffer 00 00 00 00 00 00 00 00 00 00>

    const buf_2 = Buffer.allocUnsafe(10); //不安全地创建Buffer
    console.log(buf_2); //<Buffer 00 00 00 00 00 00 00 00 60 f0> <Buffer ff ff ff ff ff ff ff ff 00 00> ...
        //alloc 和allocUnsafe之间的区别
        //首先Buffer.alloc是向系统申请 参数大小的内存 
        //而alloc会将申请过来的内存内容进行初始化,而allocUnsafe不会,allocUnsafe速度更快,但是有可能影响程序结果(保留着内存上一次使用的时候的内容).
        
    const buf_3 = Buffer.from(`ABCDEFGH`);
    console.log(buf_3); // <Buffer 41 42 43 44 45 46 47 48>
    const buf_4 = Buffer.from([1,16,033,0x44,55,66,77,88]);
    console.log(buf_4); // <Buffer 01 10 21 44 37 42 4d 58> 
        //Buffer.from 根据字符串(每个字符八位ASCI码)或者数组(转成十六进制)进行操作

// Buffer的读取和设置   
    //读取Buffer某个字节的内容
    console.log(buf_3[2]); 
        // 67(十进制)  buf_3:<Buffer 41 42 43 44 45 46 47 48>(十六进制)

    //设置Buffer某个字节的内容
    buf_1[0] = 16; console.log(buf_1); 
        //<Buffer 10 00 00 00 00 00 00 00 00 00>

    // ** 将buffer内容转换成字符串 (根据ASCII码转换)
    console.log(buf_3.toString());  
        // 'ABCDEFGH'  普通对象的tostring应该返回[object Object]   Buffer类型对象应该是重写了toString函数


// 关于溢出 Buffer每个元素为一个字节 8bit 0-255 
    let buf_5 = Buffer.alloc(4);
    buf_5[0] = 300 // 300溢出255
    console.log(buf_5[0]);  // 2c  而300的十六机制为12c,所以溢出只保留低八位,高于八位的数字直接舍弃.

// 关于中文 UTF-8一个中文字符占据3B   