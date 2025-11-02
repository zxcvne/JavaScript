/* DOM */
/* Document Object Model */
/* DOM API */

/* getElementById() : 특정 요소의 id로 값을 가져옴 */

// DOM API를 사용하여 변수에 값을 할당 할 때에는 일반적으로 변수명 앞에 $혹은 변수명 뒤에 Element라고 표기한다.
// let $color = document.getElementById("color");
// console.log($color);

/* querySelector() : css선택자로 값을 가져옴 */
// let $animalInfo = document.querySelector("div.animal-info");
// let ageElement = document.querySelector("div#age");

// console.log($animalInfo);
// console.log(ageElement);

// querySelectorAll, getElementsByClassName, getElementsByTagName

// let $infoItem = document.querySelectorAll("div.info-item");
// console.log($infoItem); // NodeList

// let $infoItem = document.getElementsByClassName("info-item");
// console.log($infoItem); // HTMLCollection

// let $infoItem = document.getElementsByTagName("div");
// console.log($infoItem); // HTMLCollection

// console.log("-----------------------------------------");

// // set className
// let $name = document.getElementById("name");
// $name.className = "dog-name";

// console.log($name);
// console.log($name.className);

// // set id
// let $animalInfo = document.querySelector("div.animal-info");
// $animalInfo.id = "animal";
// console.log($animalInfo);
// console.log($animalInfo.id);

// let $color = document.getElementById("color");
// $color.classList.add("dog-color");
// $color.classList.remove("info-item");

// console.log($color);
// console.log($color.classList); // DOMTokenList

// // textContent
// let $age = document.getElementById("age");
// $age.textContent = "5살";

// // style
// let $color = document.getElementById("color");
// $color.style.fontSize = "32px";
// $color.style.color = "blue";
