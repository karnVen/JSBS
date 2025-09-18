const ar =[10,20,30,40,50];
for (let val of ar ){
    console.log(val);


}
let str ="good moring"
for(let term of str){
    console.log(term);
}

const obj ={
    name : "ray",
    gender: "male"
}
for (let x of Object.keys(obj)){
    
}

////
function fun1(fun2){
    console.log("hi , im fjucnotn fun1");
    fun2();
}
function fun2(){
    console.log("hi im function fun2")
}
//
function fun3(fun4){
    console.log("hi f3");
    fun4();
}
fun3(function fun4(){
    console.log("hi fun4")
})

function fun5(fun6){
    console.log("hi fun5");
    fun6();
}

function fun(){
    console.log("fjkd");
}
setInterval(fun,5*1000);

//foreach 

let arr = [10,20,30,40,50];
arr.forEach(function(num){
    console.log(num);
})



let arr2 = [1,2,3];
arr2.forEach((num)=>{
    console.log(num);
})
 let arr3= [10,2,3];
 arr3.forEach((num)=>console.log(num));

 let arr4 = [10,2,3];
 arr4.forEach((num))



 //
 const ans5 =arry.reduce((accumulator,currenValue)=>{
    accumulator.hasownproperty(currentvalue)? accumulator[currentvalu]++:accumulator[currentvalue]=1
 })