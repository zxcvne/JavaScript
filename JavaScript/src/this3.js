// function Counter() {
//   this.count = 0;
//   // setInterval(callback, delayTime)
//   setInterval(function () {
//     this.count++;
//     console.log(this.count);
//   }, 2000);
// }
// const counter = new Counter();

// 화살표 함수 -> 렉시컬 스코프 // 호출한 방식과 무관하게 근처에 선언된 scope에 따름
// function Counter() {
//   this.count = 0;
//   setInterval(() => {
//     this.count++;
//     console.log(this.count);
//   }, 2000);
// }

// const counter = new Counter();

const cafe = {
  brand: "이디야",
  menu: "아메리카노",
  print: () => {
    console.log(this);
  },
};

cafe.print(); // window 객체를 가리킴
