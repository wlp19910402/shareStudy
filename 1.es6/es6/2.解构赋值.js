//字符串的结构赋值
const str = 'heilo';
// let [ a, b, c, d, e ] = str
// console.log(c);

//数组的结构赋值
const arr1 = [ 'abc', 'def', 'hij' ]
// let [ a, b, c ] = arr1;
// console.log(c);

//复合数组的解构赋值
// const arr2 = [ 'abc', 'def', [ 'hij', [ 'klm' ] ] ]
// let [ a, b, [ c, [ d ] ] ] = arr2;
// console.log(d)



//对象的结构赋值。别名的操作
// const obj1 = { one: 'hello', two: 'text', three: 'content' }

// let { three: ffff } = obj1;
// console.log(ffff);


//嵌套对象的解构赋值
const obj2 = { one: 'hello', two: 'text', list: { id: 24, name: 'home' } }
let { list } = obj2;
let { name } = list;
console.log(name);

