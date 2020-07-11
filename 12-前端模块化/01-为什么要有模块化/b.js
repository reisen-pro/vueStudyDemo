// 开发B

//怕js导入干扰 加一个分号
;
var moduleB = (function () {

  var obj = {}

  var name = '开发B'
  var flag = false
  console.log(name);

  obj.flag = flag;

  return obj;
})()

