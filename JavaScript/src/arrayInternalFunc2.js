// concat()
let array1 = ["green", "blue"];
let array2 = ["purple", "yellow"];

console.log(array1.concat(array2));

let arr3 = array1.concat(array2);

console.log("---------------");

// join()
console.log(arr3.join());

// sort(compareFn) // default : asc
console.log(arr3.sort()); // asc

const compare = (a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
};

console.log(arr3.sort(compare)); // desc

// number : sort()
let numbers = [1, 100, 25, 50, 120, 3];
console.log(numbers.sort()); // 사전순
const compareNum = (a, b) => {
  //   return a - b; // asc
  return b - a; // desc
};
console.log(numbers.sort(compareNum));

console.log("---------------");
// reduce(callbackFn(previousValue,currentValue,currentIndex), beginNum)

// let sum = 0;
// numbers.forEach((n) => {
//   sum += n;
// });
// console.log(sum);
// =>

let sum = numbers.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx);
  return acc + cur;
}, 0);

console.log(sum);
console.log("---------------");

// isArray(arr) // return : boolean
console.log(Array.isArray(sum));
console.log(Array.isArray(numbers));
console.log(Array.isArray(undefined));
