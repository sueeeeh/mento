const div1 = document.getElementById("div1"), div2 = document.getElementById("div2");

let ls = false;
let lsclick = false;

div1.addEventListener("click",function(){
    ls = !ls;
    div1.style.backgroundColor = `${ls ? "#333" : "#fff"}`;
    alert("클릭을 하셨군요 wow");
});

// div2.addEventListener("mouseover",function(){
//     lsclick = !lsclick;
//     div2.style.backgroundColor = `${lsclick ? "#333" : "#fff"}`;
// });