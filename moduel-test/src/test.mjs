// let num = 10;
// console.log(num);

// export const num = 35;
// export function add(num1, num2) {
//   return num1 + num2;
// }
// export function User(name) {
//   this.name = name;
// }

// const num = 35;
// function add(num1, num2) {
//   return num1 + num2;
// }
// function User(name) {
//   this.name = name;
// }
// export { num, add, User };

function User(name) {
  this.name = name;
}
export default User; // 모듈에서 내보내고자 하는 값이 단 한개라면
// default 키워드를 사용할 때 에는 const, var, let 키워드는 사용할 수 없다.
