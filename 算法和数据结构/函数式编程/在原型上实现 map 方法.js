/*
函数式编程：在原型上实现 map 方法
我们之前用map方法（即Array.prototype.map()）返回一个与调用它的数组长度相同的数组。只要它的回调函数不改变原始数组，它就不会改变原始数组。

换句话说，map是一个纯函数，它的输出仅取决于输入的数组和作为参数传入的回调函数。

为了加深对map方法的理解，现在我们来用for或Array.prototype.forEach()自己实现一下这个方法。

注意：纯函数可以改变其作用域内定义的局部变量，但我们最好不要这样做。


写一个和Array.prototype.map()一样的Array.prototype.myMap()。你可以用for循环或者forEach方法。
 */

// 全局变量
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
    var newArray = [];
    // 请在本行以下添加你的代码
    for(let i=0;i<this.length;i++){
        newArray.push(callback(this[i]));
    }
    // 请在本行以上添加你的代码
    return newArray;

};

var new_s = s.myMap(function(item){
    return item * 2;
});