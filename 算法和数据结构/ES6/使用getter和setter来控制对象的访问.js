/*
ES6：使用 getter 和 setter 来控制对象的访问
你可以从对象中获得一个值，也可以给对象的属性赋值。

这些通常行为被称为 getters 以及 setters。

Getter 函数的作用是可以让返回一个对象私有变量的值给用户，而不需要直接去访问私有变量。

Setter 函数的作用是可以基于传进的参数来修改对象中私有变量的值。这些修改可以是计算，或者是直接替换之前的值。

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut
注意我们调用 getter 和 setter 的语法，它们看起来并不像一个函数调用。

Getter 和 Setter 非常重要，因为它们隐藏了内部的实现细节。


使用class关键字来创建Thermostat类，它的构造函数应该可以接收华氏温度作为参数。

在类中创建 getter和setter，将温度转换成摄氏温度。

温度转换的公式是C = 5/9 * (F - 32)以及F = C * 9.0 / 5 + 32，F 代表华氏温度，C 代表摄氏温度。

请注意

当你实现这个作业的时候，你应当在类中使用一个温度标准，无论是华氏温度还是摄氏温度。

是时候展现 getter 和 setter 的威力了——无论你的 API 内部使用的是哪种温度标准，用户都能得到正确的结果。

或者说，你从用户需求中抽象出了实现细节。
 */

function makeClass() {
    "use strict";
    /* 请把你的代码写在这条注释以下 */
    class Thermostat{
        constructor(val){
            this._val = val;
        }
        get temperature(){
            return this._val*9.0/5+32 ;
        }
        set temperature(updateVal){
            this._val = 5/9*(updateVal - 32);
        }
    }

    /* 请把你的代码写在这条注释以上 */
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // 使用华氏温度来初始化
let temp = thermos.temperature; // 摄氏温度24.44度
thermos.temperature = 26;
temp = thermos.temperature; // 摄氏温度26度