// 자료형
// 원시타입, 비 원시 타입

// typeof 연산자 : 변수의 자료형을 확인하는 연산자

// 원시 타입 : 한번에 한개의 값만 받음

// number
// Infinity, NaN, -Infinity
let num = 10 / 0;
console.log(num); // Infinity
console.log(typeof num);

// BigInt
// 2^53-1 ~ -(2^53-1)
let bignum1 = 999999999999999999999999999n;
let bignum2 = BigInt(99999999999999999999999999999);
console.log(bignum1);
console.log(typeof bignum2);

// string
// '', "", ``
let name = "홍길동";
let intro = `제 이름은 ${name}입니다.`; // 탬플릿 리터럴
console.log(typeof name);
console.log(intro);

// boolean
// true / false
let isClicked = false;

if (isClicked) {
  console.log("클릭 o");
} else {
  console.log("클릭 x");
}

// Null
// 존재 X, 알 수 없는 값
let nullNum = null;
console.log(nullNum === null);

// undefined
// 값이 할당되지 않은 상태
let undefinedNum;
console.log(undefinedNum);

// symbol
