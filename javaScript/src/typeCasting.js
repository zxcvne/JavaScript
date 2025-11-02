// 자바스크립트에서 변수에 자료형을 선언하지 않는 이유는
// 프로그램 실행중에 자료형이 유연하게 변하기 때문이다.

// 묵시적 형변환
let num1 = "15";
let num2 = 5;

console.log(typeof num1);
console.log(typeof num2);

// * - / 묵시정 형변환
console.log(num1 / num2); // 3
// + 형변환을 명시 해줘야 함
console.log(parseInt(num1) + num2); // 155
