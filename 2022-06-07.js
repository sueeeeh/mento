console.log("hi");

function hello(){
    console.log("hello");
}
hello();

const 인사하기 = function (name){
    console.log(name+'hello');
}
인사하기("수현")

const 따라서인사하기 = 인사하기();
//따라서인사하기("ㄴ")

const 불편하게함수만들기 = new Function("inja1","inja2","return inja1 * inja2")
console.log(불편하게함수만들기(2,5));

