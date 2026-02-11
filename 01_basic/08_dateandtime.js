// Dates

let mydate = new Date();

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);

let myCreatedDate = new Date(2026,1,11);
let myCreatedDate1= new Date(2026,1,12,5,3);
let myCreatedDate2= new Date("2026-01-12");
let myCreatedDate3 = new Date("01-12-2026");


let myTimeStamp = Date.now();
 console.log(myTimeStamp);
 console.log(myCreatedDate.getTime());
 console.log(Math.floor(myCreatedDate.getTime()/1000));

 let newDate= new Date();

 console.log(newDate);
 console.log(newDate.getMonth()+1);
 console.log(newDate.getDay);

 newDate.toLocaleString('default',{
    weekday : "long",
 })