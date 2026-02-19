/*let marks = [1,2,3,4,5];
let Name = ["Meet","Dharmik","Parth"];
marks[2]=2;
for(let i =0; i<marks.length;i++){
    console.log("Studdent",i," Mark Is ",marks[i]);
}

for( let i of Name){
    console.log(i);
}*/
/*
let marks =[1,2,3,4,5];

let result =0;

for(let i = 0;i<marks.length;i++){
    result= result+ marks[i];
}

let final = result/marks.length;

console.log("AVG IS",final);*/

/*let Price = [200,300,500,600,700];

for(let i = 0; i<Price.length;i++){
    Price[i] = Price[i] - Price[i]* 0.1;
}
/*
for(let i = 0; i<Price.length;i++){
    console.log(`Your Final Array Is ${Price[i]}`);
}*/

//console.log(Price);
/*
let marks = [1,2,3,4,5];

marks.push(6,7,8);
console.log(marks);
let deletvalue=marks.pop();
console.log(marks);
console.log(deletvalue);

let String = marks.toString();
console.log(String);
console.log(marks);//original array as it
*/

let name = ["Meet","Dharmik","Parth"];
let surname = ["Parmar","Patel","Thakor"];

let result = name.concat(surname);
console.log(result);
console.log(result.slice(1,3));
console.log(result);

let marks = [1,2,3,4,5];
console.log(marks.splice(2,2,101,102));
console.log(marks);
//console.log(marks.splice(2,0,101,102));
//console.log(marks.splice(2,2));

let Team = ["Ind","Aus","PAK","ENG"];
Team.splice(2,1,"WI");
console.log(Team);
