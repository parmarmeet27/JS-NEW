const Name = ["Meet","Dharmik","Parth"];
const movie =["Dil","Love"];

//Name.push(movie);
//console.log(Name);
//console.log(Name[3][1]);

//const newname = Name.concat(movie);
//console.log(newname)

//const allname = [...Name,...movie];
//console.log(allname);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_anotherarray = another_array.flat(Infinity);
console.log(real_anotherarray);

console.log(Array.isArray("meet"));
console.log(Array.from("meet"))
console.log(Array.from({name:"Meet"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));