/* async, await */

// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("3초가 지났습니다.");
//     }, ms);
//   });
// };

// const start = () => {
//   delay(3000).then((res) => {
//     console.log(res);
//   });
// };

// async : 비동기를 수행할 함수의 이름 오른쪽에 작성 const start: () => Promise<void>
// await : async 키워드가 붙어 있는 함수에서 프로미스 객체가 처리 완료될때까지 함수의 실행을 기다리게 만듬
//         => then 대체, 비동기 작업의 순서를 예측할 수 있게 해줌

// const start = async () => {
//   try {
//     let result = await delay(3000);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workA");
    }, 5000);
  });
};

const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workB");
    }, 3000);
  });
};
const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workC");
    }, 10000);
  });
};

// const start = async () => {
//   try {
//     let resultA = await workA(); // 5
//     let resultB = await workB(); // 3
//     let resultC = await workC(); // 10
//     console.log(resultA);
//     console.log(resultB);
//     console.log(resultC);
//     // 18초
//   } catch (err) {
//     console.log(err);
//   }
// };

/* Promise.all() */
// Promise.all()은 전달된 Promise 배열이 fulfilled일때는 값을 반환하고 하나라도 rejected되면 error를 발생시킴
const start = async () => {
  try {
    let results = await Promise.all([workA(), workB(), workC]);
    results.forEach((res) => console.log(res)); // 10초
  } catch (err) {
    console.log(err);
  }
};

start();
