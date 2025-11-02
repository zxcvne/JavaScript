/* select Tag */

// const $fruitSelect = document.getElementById("fruitSelect");

// $fruitSelect.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });
// $fruitSelect.remove(1);

/* input Tag */

const $userName = document.getElementById("userName");
const $password = document.getElementById("password");

const $loginBtn = document.querySelector("button");

// $loginBtn.addEventListener("click", () => {
//   console.log($userName.value);
//   console.log($password.value);
// });

$userName.value = "아무개";

$password.addEventListener("input", (event) => {
  console.log(event.target.value);
});
