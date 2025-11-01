// function hoisting
connectString("hello, ", "world~!!");

function connectString(str1, str2) {
  console.log(str1 + str2);
}

// variable hoisting

// console.log(num); // undefined
// let num = 10;

// 이유 : let 키워드는 호이스팅 발생시 초기화하지 않고
// 선언만 된 상태로 TDZ(Temporal Dead Zone)라는 공간에 머무름 // 메모리 공간 확보X

// 호이스팅은 자바스크립트의 기본 성질이지만 호이스팅이 많이 발생하게 작성된 코드는 가독성을 저하시키므로
// var키워드 대신 let, const 키워드를 활용하는 것이 좋다.
