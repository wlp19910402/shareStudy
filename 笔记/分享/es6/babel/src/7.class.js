// //***实例3-es6的写法-class----------------------------
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  show () {
    console.log(this.name);
    console.log(this.age);
  }
}
let p = new Person('张三', 19);
p.show();

//***实例3-es6的写法-class----继承------------------------
class Worker extends Person {
  constructor (name, age, job) {
    super(name, age);
    this.job = job;
  }
  showJob () {
    console.log(this.job);
  }
}

let w = new Worker('张三', 18, '会计');
w.showJob();