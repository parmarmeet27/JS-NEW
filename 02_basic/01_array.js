const myarr = [1,2,3,4,5];
const name = ["meet","dharmik"];

//const myarry2 = new Array(1,2,3,4,5);
//console.log(myarry2);
//console.log(myarry2[2]); 
// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myarr.unshift(9);
myarr.shift();

console.log(myarr);
console.log(myarr.includes(9));
console.log(myarr.indexOf(3));

const newarray = myarr.join(); // to convert array into string 

console.log(newarray);

console.log("A",myarr);
console.log(myarr.slice(1,3));
console.log("B",myarr);

console.log("C",myarr.splice(1,3));

console.log("D",myarr);