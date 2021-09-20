function fn(){ 
    let str = '';
    for(let i = 1; i <= 10; i++){
        str += i + ' ';
    }
    console.log(str);
}
fn();

let fn1 = ()=>{
    let i = 1 ;
    let time = setInterval(function(){
        if(i==10){
            clearInterval(time);
        }
        console.log((i++));
    },1000)
}
fn1();

function fn2(){
    for(let i = 0; i < 5; i++){
        let str = '';
        for(let k = 0 ; k < 4-i ;k++ ){
           str += '';
        }
        for(let j = 0; j < i+1 ;j++){
           str += 'A';
        }   
        console.log(str);
    }
}
fn2();

function fn3(){
    for(let i = 1; i <= 9; i++){
        for(let j = 1; j <= i ; j++){
            console.log(`${j}*${i}= ${i*j}`);
        }
    }
}
fn3();