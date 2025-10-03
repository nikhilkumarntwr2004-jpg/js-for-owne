const myArr = [1,2,3,4,5,69]
console.log(myArr[2]);//its give you 3 beacuse count like 0,1,2 then give 3
console.log(myArr);//but its give you all the array in code
myArr.push(9);//if you print it its give you 9 in start
myArr.pop();//and use pop remove push include to it
myArr.unshift(9);//its give you add in starting 9 and 
myArr.shift();//its for give you remove first unshift number
console.log(myArr.include(3));
//slice:---
console.log("A", myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
//splice:----
console.log("B",myArr);
const myn2 = myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2);
//its next step of my array section its last
const Bjp_leaders = ["nikhil","harsh","yash"]
const Aap_leaders = ["manoj","pawan","keshari"]
 console.log(Bjp_leaders.concat(Aap_leaders))

console.log(...Aap_leaders,...Bjp_leaders)
const all_leaders_union = [...Aap_leaders,...Bjp_leaders]
console.log(all_leaders_union);

const nikhil_cars = [1,2,3,[4,5],6,[8,9]]
const real_cars = nikhil_cars.flat(Infinity)
console.log(real_cars);
let sc1= 23
let sc2 = 43
let s3 = 43
console.log(Array.of(sc1,sc2,s3));


