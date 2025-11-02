/* 프로미스 : 작업을 비동기 처리시 사용 */
/*
 * promise 객체가 생성되면 executor함수가 실행되고 이때 state 프로퍼티의 값은 : pending, result 프로퍼티의 값은 undefined이다.
 * executor 함수는 매개변수로 resolve(value), reject(err)의 값을 가지며
 * 성공하면 {state : fulfilled, result : value }
 * 실패하면 {state : rejected, result : error} 값을 갖는다.
 */

/* 생성자 생성 */
/* new Promise(executor) */
/* const executor = (resolve, reject) => {}; */

// const executor = (resolve, reject) => {
//   setTimeout(() => {
//     resolve("성공");
//     reject("실패");
//   }, 3000);
// };

// const promise = new Promise(executor);
// // promise.then(
// //   (result) => {
// //     console.log(result);
// //   },
// //   (error) => {
// //     console.log(error);
// //   }
// // );

/* then() : 프로미스객체를 반환하는 함수에 체이닝하여 프로미스 객체를 사용할 수 있다. */

//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const workA = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 5);
//   }, 5000);
// };

// const workB = (value, callback) => {
//   setTimeout(() => {
//     callback(value - 3);
//   }, 3000);
// };

// const workC = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 10);
//   }, 10000);
// };

/* callback hell */
// workA(10, (resA) => {
//   console.log(`workA : ${resA}`);
//   workB(resA, (resB) => {
//     console.log(`workB : ${resB}`);
//     workC(resB, (resC) => {
//       console.log(`workC : ${resC}`);
//     });
//   });
// });

const workA = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });
  return promise;
};

const workB = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  });
  return promise;
};

const workC = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });
  return promise;
};

/* callback hell */
// workA(10).then((resA) => {
//   console.log(`workA : ${resA}`);
//   workB(resA).then((resB) => {
//     console.log(`workB : ${resB}`);
//     workC(resB).then((resC) => {
//       console.log(`workC : ${resC}`);
//     });
//   });
// });

/* promise chaining */
workA(10)
  .then((resA) => {
    console.log(`workA : ${resA}`);
    return workB(resA); // Promise
  })
  .then((resB) => {
    console.log(`workB : ${resB}`);
    return workC(resB);
  })
  .then((resC) => {
    console.log(`workC : ${resC}`);
  });
