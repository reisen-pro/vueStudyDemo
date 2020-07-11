// 开发A创建的第二个JS

// 想使用flag变量 想使用sum函数

// if (flag) {
//   console.log("true")
// }
//
// function sum(num1, num2) {
//   return num1 + num2;
// }
;
(function () {
  if (moduleA.flag){
    console.log("a.flag")
  }

  console.log(moduleA.name);
  console.log(moduleA.sum(10, 20));
})()
