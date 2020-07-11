// 开发A

// 封装成一个模块对象
var moduleA = (function () {
  //导出的对象
  var obj = {}

  var name = '开发A'
  var age = 22

  function sum(num1, num2) {
    return num1 + num2
  }

  var flag = true

  if (flag) {
    console.log(sum(10, 20));
  }

  obj.flag = flag;
  obj.name = name;
  obj.sum = sum;

  return obj;

})()
