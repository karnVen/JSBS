const fun1 =(a,b)=>{
    return a * b + a % b;
}
let ans1 = fun1(5,2);
console.log(ans1);

///
const fun2 =(a,b)=>a * b + a % b;

let ans2 = fun1(5,2);
console.log(ans1);