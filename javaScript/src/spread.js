// spread : ...
// 작성된 객체들의 반복되는 프로퍼티를 스프레드로 사용해 코드량을 줄일 수 있다.

const toy = {
  type: "bear",
  price: 15000,
};

const blueToy = {
  ...toy,
  color: "blue",
};

const yellowToy = {
  ...toy,
  color: "yellow",
};

console.log(blueToy);
console.log(yellowToy);

const color1 = ["red", "orange", "yellow"];
const color2 = ["blue", "navy", "purple"];

const rainbow = [...color1, "green", ...color2];

console.log(rainbow);

const print = (a, b, c, d, e, f) => {
  console.log(a, b, c, d, e, f);
};

let numbers = [1, 2, 3, 4, 5, 6];

print(...numbers);
