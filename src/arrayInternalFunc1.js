// forEach(callbackFn(value, index, array))
let arr = [1, 2, 3, 4, 5];
console.log("---------------------");
arr.forEach((elm) => {
  console.log(elm);
});
console.log("---------------------");
arr.forEach((e, idx) => {
  console.log(`${idx}번째 요소는 ${e}입니다.`);
});
console.log("---------------------");
arr.forEach((e, i, array) => {
  console.log(`${i}번째 요소는 ${e}입니다.`);
  console.log(array);
});
console.log("---------------------");

// map(callbackFn(value, idx, array))
let newArr = arr.map((e) => {
  return e * 10;
});
console.log(newArr);
console.log("---------------------");

let colors = ["green", "blue", "purple"];

// at(index)
console.log(colors.at(1));
console.log(colors.at(-1)); // lastIndex
console.log("---------------------");

// includes(searchElement, fromIndex) return : boolean
console.log(colors.includes("green"));
console.log(colors.includes("green", 1));
console.log("---------------------");

// indexOf(searchElement, fromIndex) return : index or -1
console.log(colors.indexOf("green"));
console.log(colors.indexOf("purple", 1));
console.log(colors.indexOf("yellow")); // -1
console.log("---------------------");

// findIndex(callbackFn(value,index,array))
let colors2 = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
  { id: 4, color: "yellow" },
];

let idx = colors2.findIndex((e) => e.color === "purple");
console.log(idx);
colors2.findIndex((e, i, a) => {
  console.log(`${i}번째 값은 id : ${e.id} ,color: ${e.color}`);
  console.log(a);
});
console.log("---------------------");

// find()
let idx2 = colors2.find((elm) => elm.color === "purple");
console.log(idx2);
console.log("---------------------");

// filter()
let filterArray = colors2.filter((e, i, v) => e.id < 4);
console.log(filterArray);
console.log("---------------------");

// slice(begin, end) // beginIdx ~ endIdx-1
let sliceArray = colors2.slice(1, 3);
console.log(sliceArray);
