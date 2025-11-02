/* this */
/* JS에서 this 키워드는 자신이 속한 객체를 가리킨다. */

/* 
   #js에서 함수 호출 방식
    1. 일반 함수 호출
    2. 메서드 호출
    3. 생성자 함수 호출
    4. 콜백 함수 호출
 */

/* 전역공간 */
// console.log(this); // browser에서 this를 호출하면 Window 객체가 출력되고 node 환경에서 실행시 global 객체가 출력된다.

//  1. 일반 함수 호출
// function func() {
//   console.log(this);
// }
// func(); // 함수를 호출한 전역객체인 window, global 객체가 출력된다.

//  2. 메서드 호출
/* 메서드 -> 객체 프로퍼티 함수 */
// const cafe = {
//   brand: "이디야",
//   menu: "아메리카노",
//   print: function () {
//     console.log(this);
//   },
// };
// cafe.print(); // 메서드를 포함하고 있는 cafe 객체가 출력됨

// const cafe = {
//   brand: "이디야",
//   menu: "아메리카노",
//   newCafe: {
//     brand: "이디야",
//     menu: "라떼",
//     print: function () {
//       console.log(this);
//     },
//   },
// };
// cafe.newCafe.print(); // newCafe 객체가 출력됨

const cafe = {
  brand: "이디야",
  menu: "아메리카노",
  print: function () {
    console.log(this);
  },
};

const myCafe = cafe.print;
myCafe(); // window객체가 출력
// 이유 : this 키워드는 자신이 속한 객체를 가리키는 키워드로 자신을 포함하는 함수가 어떻게 호출되었는가에 따라 값이 바뀐다.
// print 함수는 메서드로서 호출된 것이 아니라 전역공간에서 일반함수로서 호출 되었기때문에 myCafe를 호출한 전역객체인 window객체가 출력된다.
