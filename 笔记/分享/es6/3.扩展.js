//字符串扩展
// const str = 'hello';
// let str1 = [ ...str ];
// console.log(str1);

//数组扩展
// const arr = [ 'abc', 'def', 'hij' ]
// const arr1 = [ '123', '456', '789' ]
// let arr2 = [ ...arr, ...arr1 ];
// console.log(arr2);

// const arr3 = [ 24, 56 ];
// function sum (a, b) {
//   console.log(a + b);
// }
// sum(...arr3);



//对象展开
const obj1 = {
  one: 'hello',
  two: 'text',
  list: {
    id: 24,
    name: 'home'
  }
}
let obj2 = { one: 'yes', ...obj1 }
console.log(obj2);
