var name = 'aaa';
var age = 18;
var flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(20, 30));
}

// 导出方式1
export {
  flag, sum
}
// 导出方式2
export var num1 = 1000;
export var height = 1.88;

// 导出方法/函数
export function sub(num1, num2) {
  return num2 - num1;
}

// 导出类
export class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  run() {
    console.log('在奔跑');
  }
}

// export default

// const address = '上海市'
// export default address;

// export default 只允许出现一个
export default function (value) {
  console.log(value);
}
