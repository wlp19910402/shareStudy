"use strict";

//数组求和
var arr = [ 100, 28, 54, 67, 34, 89, 78 ]; // let arr1 = [];
// for (var i = 0; i < arr.length; i++) {
//   arr1.push(arr[ i ] >= 60);
// }
//forEach
//map
// let arr2 = arr.map((item) => item >= 60);
// console.log(arr2);
//filter
// let arr2 = arr.filter(item => item >= 60 && tmp % 2 == 0)
// console.log(arr2);
//reduce

var arr3 = arr.reduce(function (tmp, item) {
  return tmp + item;
});
console.log(arr3);