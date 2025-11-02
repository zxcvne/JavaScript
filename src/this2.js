// 3. 생성자 함수 호출
// 생성자 -> 새로운 객체 생성 / new 키워드

// function Cafe(menu) {
//   console.log(this);
//   this.menu = menu;
// }

// let myCafe = new Cafe("latte");
// console.log(myCafe);

// 4. 콜백 함수 호출

const cafe = {
  brand: "이디야",
  menu: "",
  setMenu: function (menu) {
    this.menu = menu;
  },
};

function getMenu(menu, callback) {
  callback(menu); // 메서드가 일반함수로서 호출 되었기 때문에 web browser의 전역객체인 window객체의 menu property에 값이 할당됨
}
getMenu("핫초코", cafe.setMenu);

console.log(cafe); // cafe 객체의 menu property에 값이 할당되지 않음.
// console.log(window.menu);

//  일반 함수 호출 : 전역 객체
//  메서드 호출 : 메서드를 포함하고 있는 객체
//  생성자 함수 호출 : 생성할 객체
//  콜백 함수 호출 : 전역 객체
//  즉 this는 함수 정의 위치가 아니라 호출 방식에 따라 동적으로 결정됨
