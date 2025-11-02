// const num = 20;

// console.log(num);

// import { num, add, User } from "./test.mjs";
// console.log(num);
// console.log(add(10, 19));
// console.log(new User("현서"));

// import * as testModule from "./test.mjs";
// console.log(testModule.num);
// console.log(testModule.add(10, 19));
// console.log(testModule.User("현서"));

import testModule from "./test.mjs";
console.log(new testModule("현서"));
