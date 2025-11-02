// https://jsonplaceholder.typicode.com

// let response = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(response);

/* api 요청을 할때는 네트워크 오류, 인터넷 속도등 다양한 이유로 실패할 수 도 있기때문에 항상 에러를 처리하는 방식으로 코드를 작성해주어야 함. */

// const getData = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   console.log(data);
// };
// getData();

const getData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getData();
