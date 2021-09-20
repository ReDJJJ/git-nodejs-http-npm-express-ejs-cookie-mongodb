let callback1 = function(req,res){
    res.end("HELLO WORLD");
}
let callback2 = function(){
    console.log("listening 80 port");
}

exports.callback1 = callback1;
exports.callback2 = callback2;