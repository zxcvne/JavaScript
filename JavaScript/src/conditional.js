// if
let num = 10;
if (num < 10) {
  console.log(`num은 10보다 작습니다.`);
} else if (num == 10) {
  console.log(`num은 10입니다.`);
} else {
  console.log(`num은 10보다 큽니다.`);
}

// switch case
let fruit = `apple`;
switch (fruit) {
  case "banana":
    console.log("banana");
    break;
  case "apple":
    console.log("apple");
    break;
  case "grape":
    console.log("grape");
    break;
  default:
    console.log("default");
}
