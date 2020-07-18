import {flag, sum} from "./aaa.js";
import {num1, height} from "./aaa.js";
import {sub} from "./aaa.js";
import {Person} from "./aaa.js";


//导入默认值 可以自己起名
import add from "./aaa.js";

//全部导入 起一个别名
import * as a from "./aaa.js";

console.log(a.flag);

if (flag) {
  console.log("mmm.flag()")
  console.log(sum(30, 50));
}

console.log('mmm中使用' + num1);

console.log('mmm中使用sub' + sub(10, 100));

let person1 = new Person();
let person2 = new Person('person2', '20');
person1.run();
console.log('person2.name' + person2.name);

add('mmm中调用默认方法')
