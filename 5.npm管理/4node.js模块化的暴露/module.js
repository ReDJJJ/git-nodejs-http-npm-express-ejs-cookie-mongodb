function add(A,B){
    console.log(A+B);
}

function random(x,y){
    console.log(Math.floor(Math.random()*(y-x+1)+x));
}

module.exports = {
    add,random
};

