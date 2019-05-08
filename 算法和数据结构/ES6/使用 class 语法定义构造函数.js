/*
ES6：使用 class 语法定义构造函数
ES6 提供了一个新的创建对象的语法，使用关键字class。

值得注意的是，class只是一个语法糖，它并不像 Java、Python 或者 Ruby 这一类的语言一样，严格履行了面向对象的开发规范。

在 ES5 里面，我们通常会定义一个构造函数，然后使用 new 关键字来实例化一个对象：

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
class的语法只是简单地替换了构造函数的写法：

class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
注意class关键字声明了一个新的函数，并在其中添加了一个会在使用new关键字创建新对象时调用的构造函数。


使用class关键字，并写出正确的构造函数，来创建Vegetable这个类：

Vegetable这个类可以创建 vegetable 对象，这个对象拥有一个在构造函数中赋值的name属性。
 */

function makeClass() {
    "use strict";
    /* 在这行下面改写代码 */
    class Vegetable {
        /**
         * constructor 是一种用于创建和初始化class创建的对象的特殊方法。
         * 详情：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor
         */
        constructor(name){
            this.name = name;
        }
    }
    /* 在这行上面改写代码 */
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => 应该显示 'carrot'
