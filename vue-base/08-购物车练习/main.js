const app = new Vue({
  el: '#' +
    'app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 58.00,
        count: 1
      },
      {
        id: 2,
        name: '《编程艺术》',
        date: '2009-2',
        price: 98.00,
        count: 1
      }, {
        id: 3,
        name: '《编程珠玑》',
        date: '20011-9',
        price: 118.0,
        count: 1
      }, {
        id: 4,
        name: '《代码大全》',
        date: '2001-3',
        price: 78,
        count: 1
      }
    ]
  },
  methods: {
    decrement(index) {
      if (this.books[index].count >= 1) {
        this.books[index].count--;
      }
      // console.log(count);
      // count > 1 ? count-- : count=count;
      // this.books[index].count = count;
      // console.log(this.books[index].count);
    },
    increment(index) {
      let count = this.books[index].count;
      count < 5 ? count++ : count = count;
      this.books[index].count = count;
    },
    removeHandler(index) {
      this.books.splice(index, 1)
    }
  },
  filters: {
    showPrice(price) {
      return "￥" + price.toFixed(2);
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      // for (let book of this.books) {
      //   totalPrice += (book.price * book.count);
      // }
//      return this.books.reduce((price,n) => this.books.price + n);
//       return this.books.reduce(function (preValue, book) {
//         return preValue += book.price * book.count;
//       }, 0);

      return this.books.reduce((preValue, book) => preValue + book.count * book.price, 0);
      // for (let i in this.books) {
      //   totalPrice += (this.books[i].price * this.books[i].count);
      // }
      // return totalPrice;
    }
  }
})
// filter/map/reduce
// fitter中的回调函数有一个要求：必须返回一个布尔值：
// true:当返回true时，函数内部会自动将这次回调的n加入新的数组中
// false:当返回false时，函数内部会过滤掉这次的n


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


// //取出所有小于100的数字的两倍的和
// const nums = ['20', '30', '200', '150', '90']
//
// let total1Count = nums.filter(function (n) {
//   return n < 100
// }).map(function (n) {
//     return n * 2
//   }
// ).reduce(function (preValue, n) {
//     return preValue + n;
//   }, 0
// )
//
// //如果数组保存的是对象的话， reduce不能省略初始值0
// let total2Count = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n);

console.log('total1Count' + total1Count)
console.log('total2Count' + total2Count);


//第一次 preValue：0 n 20
//第二次 preValue：100 n 30
//第二次 preValue：100 n 90

//console.log(new2Nums);
// let newNums = []
// for (let num of nums) {
//   if (num < 100) {
//     newNums.push(num);
//   }
// }
//console.log(newNums);
//
// //将所有小于100的数字进行转换，全部*2
// let new2Nums = []
// for (let n of newNums) {
//   new2Nums.push(n * 2);
// }
//
// //将所有的new2Nums数字相加，得到最终结果
// let total = 0
// for (let n of new2Nums) {
//   total += n;
// }


