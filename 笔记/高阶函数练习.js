// filter/map/reduce
// fitter中的回调函数有一个要求：必须返回一个布尔值：
// true:当返回true时，函数内部会自动将这次回调的n加入新的数组中
// false:当返回false时，函数内部会过滤掉这次的n

//取出所有小于100的数字的两倍的和
const nums = ['20', '30', '200', '150', '90','120'];

/*
let newNums = nums.filter(function (n) {
  return n < 100;
})

let new2Nums = newNums.map(function (n) {
  return n * 2;
})

let total1Count = new2Nums.reduce(function (preValue, n) {
  return preValue + n;
}, 0)
*/

let total = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
    return n * 2
  }
).reduce(function (preValue, n) {
    return preValue + n;
  }, 0
)

//如果数组保存的是对象的话， reduce不能省略初始值0
let total2 = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n);
