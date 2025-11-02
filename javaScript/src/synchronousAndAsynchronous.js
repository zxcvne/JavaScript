/* synchronous(동기) : 하나의 작업이 실행되는 동안은 다른 작업을 수행하지 않는 방식 // 순차적인 실행 */
/* asynchronous(비동기) : 작업이 종료되기를 기다리지 않고 다음 작업을 병렬적으로 수행하는 방식 */

/* 자바 스크립트는 싱글 스레드 언어로 한번에 하나의 작업만 실행이 가능하다. */
/* 하나의 스레드 안에서 작업들을 비동기로 여러작업을 동시에 실행하는 것 처럼 보이게 한다. */

// const workA = () => {
//   console.log("workA");
// };

// const workB = () => {
//   console.log("workB");
// };

// const workC = () => {
//   console.log("workC");
// };

// 동기
// 만약 A의 실행시간이 5초 B = 3초, C = 10초 라면
// 동기로 실행시 총 소요시간은 5 + 3 + 10인 18초가 되지만
// 비동기로 실행시 가장 오래 걸리는 작업C인 C의 소요시간 10초가 된다
// workA();
// workB();
// workC();

// 비동기
// setTimeout(callbackFn, delayTime)

// const work = (callback) => {
//   console.log("비동기");
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };
// work(() => {
//   console.log("종료");
// });

console.log("-------------------------------------");

const workA = () => {
  setTimeout(() => {
    console.log("workA");
  }, 5000);
};

const workB = () => {
  setTimeout(() => {
    console.log("workB");
  }, 3000);
};
const workC = () => {
  setTimeout(() => {
    console.log("workC");
  }, 10000);
};
const workD = () => {
  console.log("workD");
};

workA(); // async
workB(); // async
workC(); // async
workD(); // sync
