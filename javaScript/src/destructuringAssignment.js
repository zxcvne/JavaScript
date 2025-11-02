// 구조 분해 할당
// 배열이나 객체의 요소 및 프로퍼티들을 분해해,
// 그 값들을 가각의 변수에 할당하는 자바스크립트의 표현식

// let colors = ["green", "blue", "purple"];
// let c1 = colors[0];
// let c2 = colors[1];
// let c3 = colors[2];
// let [c1, c2, c3] = colors;

let c1, c2, c3; // 선언 분리 할당
// [c1, c2, c3] = ["green", "blue", "purple"];
// [c1, c2] = ["green", "blue", "purple"];
[c1, c2, c3, c4 = "yellow"] = ["green", "blue", "purple"]; // 기본값 할당

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);

// exchange

let a = 10;
let b = 15;
// let tmp;
// tmp = a;
// a = b;
// b = tmp;

[a, b] = [b, a];
console.log(a, b);

let colors = {
  co1: "green",
  co2: "blue",
  co3: "purple",
};

// let co1 = colors.co1;
// let co2 = colors.co2;
// let co3 = colors.co3;

let { co1: color1, co2: color2, co3: color3, color4 = "yellow" } = colors;

// console.log(co1);
// console.log(co2);
// console.log(co3);

console.log(color1);
console.log(color2);
console.log(color3);
console.log(color4);
