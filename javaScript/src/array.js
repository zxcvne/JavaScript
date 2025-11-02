// Array

// 생성자 함수
let arr1 = new Array(1, 2, 3); // [ 1, 2, 3 ]
let arr2 = new Array(3); // [ <3 empty items> ]

console.log(arr1);
console.log(arr2);

console.log("---------------");

// 리터럴
let arr3 = [1, 2, 3];
let arr4 = [3];

console.log(arr3);
console.log(arr4);

console.log("---------------");

// index
let array = [1, "hello", null];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

console.log("---------------");

// push()
// unshift()
let fruit = ["apple", "orange"];
fruit.push("peach");
fruit.unshift("grape");

console.log(fruit);

console.log("---------------");

// modify
let animal = ["dog", "cat", "lion"];
animal[2] = "parrot";

console.log(animal);

console.log("---------------");

// pop()
// shift()
// splice(start,deleteCount);

let colors = ["purple", "skyblue", "green", "yellow", "red", "blue"];

// colors.pop();
// colors.shift();
// console.log(colors.length);
console.log(colors);
console.log(colors.splice(2, 2));
console.log(`shift : ${colors.shift()}`);
console.log(`pop : ${colors.pop()}`);
console.log(colors);
