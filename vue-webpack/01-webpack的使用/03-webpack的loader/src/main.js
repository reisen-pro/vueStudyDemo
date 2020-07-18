// 使用commonjs的模块化的规范
const {add, mul} = require('./js/mathUtil.js')

console.log(add(20, 30));
console.log(mul(20, 30));

import {name, age, height} from "./js/info";

// 使用ES6的模块化的规范
console.log(name);
console.log(age);
console.log(height);

// 依赖css文件
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')
document.writeln('<h2>你好，learner</h2>')