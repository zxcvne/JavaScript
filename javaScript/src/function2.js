// funtion

let str = "함수";

// 함수 선언식
func1(str); // hoisting
function func1(str) {
  console.log(`${str} 선언식`);
}

// 함수 표현식
// func2(str); // error
// ReferenceError: Cannot access 'func' before initialization
const func2 = (str) => {
  console.log(`${str} 표현식`);
};
func2(str);

const add = (a, b) => a + b;
console.log(add(10, 25));

// 콜백 함수
const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result);
};

const printResult = (result) => {
  console.log(`두 수의 합 : ${result}`);
};

const doubleResult = (result) => {
  console.log(`두 수의 합에 2를 곱한 값 : ${result * 2}`);
};

calculate(10, 20, printResult);
calculate(10, 20, doubleResult);

const testFunc = (callback) => {
  callback();
};

testFunc(() => {
  console.log(`callback test1`);
});

testFunc(function () {
  console.log(`callback test2`);
});

// 표현식으로 선언하는 함수는 익명함수, 기명함수가 있다.
// 함수 표현식으로 선언된 함수는 일반적으로 익명함수로 선언하고
// 함수 안에서 재귀적으로 함수를 사용할때 기명함수를 사용할 수 있다.
