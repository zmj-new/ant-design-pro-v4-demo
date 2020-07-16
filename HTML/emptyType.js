"use strict";
//两个空类型
var u = undefined;
var n = null;
//常见区别
Number(null); //0
Number(undefined); // NaN
var age = null;
console.log(5 + age); //5
age = undefined;
console.log(5 + age); //NaN
console.log(undefined == null); //true
