/*
函数式编程：在原型上实现 filter 方法
为了加深对filter的理解，现在我们来自己实现一下Array.prototype.filter()方法。

可以用for循环或Array.prototype.forEach()。

请注意：纯函数可以改变其作用域内定义的局部变量，但我们最好不要这样做。


编写一个和Array.prototype.filter()功能一样的Array.prototype.myFilter()方法。你可以用for循环或Array.prototype.forEach()方法。
 */

// 全局变量
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
    var newArray = [];
    // 请在本行以下添加你的代码
    for(let item of this){
        if(callback(item)){
            newArray.push(item);
        }
    }

    // 请在本行以上添加你的代码
    return newArray;

};

var new_s = s.myFilter(function(item){
    return item % 2 === 1;
});