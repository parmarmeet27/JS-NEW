/*function myfunction(){
    console.log("Hello Meet");
    console.log("Hello Meet");
}

myfunction();*/
/*
function myfunction(msg){
   console.log(msg);
}

myfunction("Hello Meet");*/
/*
let arrowmul = (a,b)=>{
  return a * b ;
}

const printHello = ()=>{
    console.log("Hello Meet");
}
*/

//For Each
//let arr = [1,2,3,4,5];

/*arr.forEach(function printVal(val,idx,arr){
    console.log(val,idx,arr);
})*/
/*arr.forEach((val)=>{
    console.log(val);
})*/

/*arr.forEach(function Squre(val) {
    console.log(val * val);
})*/


/*let newArray = arr.map((val) => {
    return val * val;
})

console.log(newArray);*/

//Filter
/*let newarry = arr.filter((val)=>{
    return val%2==0;
})

console.log(newarry);*/
//Reduce Method
/*const output = arr.reduce((res, curr)=> {
    return res + curr;
});

const output1 = arr.reduce((res, curr)=> {
    if(res< curr){
        res = curr
    }
    return res;
});
console.log(output);
console.log(output1);*/
//Practice Question
/*
let mark =[20,40,60,80,95,100];

let Result = mark.filter((val) => {
    if(val<90){
        return val;
    }
   
})

console.log(Result);*/

// Practice question 2

let n = prompt("Enter A Number");

let arr=[];

for(let i =1; i<=n;i++){
    arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((res,curr)=>{
    return res + curr;
})

let Prod = arr.reduce((res,curr)=>{
    return res * curr;
})
console.log("Sum is",sum);
console.log("Prod Or Factorial",Prod);
