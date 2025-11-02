/* createElement() */
let $type = document.createElement("div");
$type.className = "info-item";
$type.id = "type";
// $type.textContent = "말티즈";
/* createTextNode */
let $typeText = document.createTextNode("말티즈");

let $animalInfo = document.querySelector("div.animal-info");
/* appendChild */
$animalInfo.appendChild($type);
$type.appendChild($typeText);

console.log($type);
console.log($typeText);

// id가 age인 div요소의 아래에 클래스와 아이디가 newBtn인 button 태그로 이루어진 노드 생성
let $button = document.createElement("button");
$button.id = "new-btn";
$button.className = "new-btn";
$button.innerText = "버튼";

let $age = document.querySelector("div#age");
$age.appendChild($button);

/* addEventListener(event, listener) */
$button.addEventListener("click", () => {
  window.alert("클릭");
});

/* innerHTML */
// console.log($animalInfo.innerHTML);

// innerHTML : 성능이나 보안에 문제가 있으므로 주의해서 사용해야 함.
//             따라서 가능하다면 textContent, createElement, appendChild 같은 안전한 DOM API를 활용하는 것이 좋음.

$animalInfo.innerHTML = '<div id = "name">고양이</div>';
