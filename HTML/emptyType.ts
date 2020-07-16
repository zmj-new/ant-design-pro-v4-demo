//两个空类型
let u: undefined = undefined
let n: null = null

//常见区别
Number(null) //0
Number(undefined)  // NaN

let age: any = null
console.log(5 + age) //5
age = undefined
console.log(5 + age)  //NaN

console.log(undefined == null) //true