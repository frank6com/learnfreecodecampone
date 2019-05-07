/*
ES6：将 rest 操作符与函数参数一起使用
ES6 推出了用于函数参数的 rest 操作符帮助我们创建更加灵活的函数。在rest操作符的帮助下，你可以创建有一个变量来接受多个参数的函数。这些参数被储存在一个可以在函数内部读取的数组中。

请看以下代码：

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // 输出：You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // 输出：You have passed 4 arguments.
rest操作符可以避免查看args数组的需求，并且允许我们在参数数组上使用map(),fiter()，和reduce()。


修改sum函数，来让它使用rest操作符，并且它可以在有任何数量的参数时以相同的形式工作。
 */


const sum = (function() {
    "use strict";
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6