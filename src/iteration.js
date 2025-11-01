// for
for (let i = 1; i < 6; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

console.log("---------");
console.log();

// while
let n = 1;
while (n < 31) {
  if (n % 6 == 0) {
    console.log();
  } else {
    process.stdout.write("*");
  }
  n++;
}

console.log("---------");

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("---------");

let person = {
  name: "홍길동",
  age: 25,
  height: 180,
};

// Object.keys()
let newArr1 = Object.keys(person);

for (let i = 0; i < newArr1.length; i++) {
  let nowKey = newArr1[i];
  console.log(`key : ${nowKey}, value : ${person[nowKey]}`);
}

console.log("---------");

// Object.values()
let newArr2 = Object.values(person);
for (let i = 0; i < newArr2.length; i++) {
  console.log(`value : ${newArr2[i]}`);
}

console.log("---------");
// Object.entries() : key, value로 된 배열을 리턴 [[key,value],[key,value],[key,value]]
let newArr3 = Object.entries(person);

for (let i = 0; i < newArr3.length; i++) {
  console.log(`key : ${newArr3[i][0]}, value : ${newArr3[i][1]}`);
}

console.log("---------");
// for of : Array
let arr2 = [1, 2, 3, 4, 5];
for (let i of arr2) {
  console.log(i);
}

console.log("---------");
// for in : Object
for (let key in person) {
  console.log(`key : ${key}, value : ${person[key]}`);
}
