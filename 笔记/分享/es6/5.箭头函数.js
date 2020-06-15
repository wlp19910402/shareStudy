// const a = 90;
// const b = 89;
// 普通函数
// function sum (i, j) {
//   return i + j;
// }
// let c = sum(a, b);
// console.log(c);
// 箭头函数直接返回普通数据
// let sum = (i, j) => i + j;
// console.log(sum(a, b));


// 普通函数返回对象
function json1 () {
  return {
    id: 1,
    data: 'abgaguhkad'
  }
}
//箭头函数返回对象
let json2 = () => ({ id: 1, data: 'abgaguhkad' })
console.log(json2())

