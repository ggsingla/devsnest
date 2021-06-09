// input var
var inputf = Number(document.getElementById("inputf").value);
var inputs = Number(document.getElementById("inputs").value);

// // btn var
// var plus_btn = document.getElementById("plus");
// var minus_btn = document.getElementById("minus");
// var pro_btn = document.getElementById("pro");
// var divide_btn = document.getElementById("divide");

// answer var
var ans = document.getElementById("answer");

// plus_btn.addEventListener("click", () => {

// console.log(inputf)
// console.log(inputs)
// //   ans.innerHTML = ("${inputf}" + "${inputs}");
// //   var x = ${inputf} "+" ${inputs}
//     var x= inputf + inputs
//   ans.innerHTML = x
//   console.log(x)

//     // x = inputf +inputs;
//     // ans.innerHTML = x;
//     // console.log(x);
// });


function add(){
    var n1 = Number(document.getElementById("inputf").value);
    var n2 = Number(document.getElementById("inputs").value);
    console.log(n1 + n2);
    ans.innerHTML = n1  + n2
}
function sub(){
    var n1 = Number(document.getElementById("inputf").value);
    var n2 = Number(document.getElementById("inputs").value);
    console.log(n1 - n2);
    ans.innerHTML = n1  - n2
}
function prod(){
    var n1 = Number(document.getElementById("inputf").value);
    var n2 = Number(document.getElementById("inputs").value);
    console.log(n1 * n2);
    ans.innerHTML = n1  * n2
}
function div(){
    var n1 = Number(document.getElementById("inputf").value);
    var n2 = Number(document.getElementById("inputs").value);
    console.log(n1 / n2);
    ans.innerHTML = n1  / n2
}
