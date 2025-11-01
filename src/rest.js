// rest
// 나머지 매개변수

const blueToy = {
  type: "robot",
  price: "15000",
  color: "blue",
};

const { type, ...rest } = blueToy; // rest문법은 항상 맨 마지막에 작성해야함
// const {  ...rest, color } = blueToy; // error

console.log(type);
console.log(rest);

const color = ["red", "orange", "yellow", "green"];
const [c1, c2, ...r] = color;

console.log(c1, c2);
console.log(r);

const print = (a, b, ...rest) => console.log(a, b, rest);

print(1, 2, 3, 4, 5, 6, 7);
console.log("----------------------------");

// rest
const printArr = (...rest) => {
  console.log(rest);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

printArr(...numbers); // spread
