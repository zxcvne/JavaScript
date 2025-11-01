// Object
// 생성자 함수, 리터럴

// 생성자 함수
let obj1 = new Object();
console.log(obj1);

// 리터럴
let obj2 = {};
console.log(obj2);

// object property
// key : value
console.log("-----------------");
let book = {
  title: "자바스크립트 첫걸음",
  author: "zxcvne",
  category: "javascript",
  color: function () {
    console.log("orange");
  },
};

// 객체값 표기법 : .표기법, []표기법
// .표기법 : 객체 프로퍼티의 값을 꺼내 사용할 때 주로 사용
//[]표기법 : 객체의 key값들이 고정적이지 않고 함수의 매개변수에 따라 key값을 계속 변경해야 되는 경우 주로 사용
console.log(book.title);
console.log(book["author"]); // key값이 문자열임을 명시 해주어야 함.
console.log("-----------------");
for (let key in book) {
  console.log(`${key} : ${book[key]}`);
}

book.title = "모던 자바스크립트 Deep Dive";
console.log(book.title);

const person = {
  name: "홍길동",
  age: 23,
  // 메서드를 선언할 때에는 화살표 함수보다 function 키워드를 활용하는 것이 좋다
  // 화살표 함수로 선언된 메서드의 this는 객체의 프로퍼티를 가리키지 못하고 가장 밖에 있는
  // global 객체인 window를 가리킨다.
  print: function () {
    console.log(`제 이름은 ${this.name}입니다.`);
    // 메서드는 this키워드를 통해 자신 객체의 프로퍼티에 접근할 수 있다.
  },
};

person.print();
person["print"]();
