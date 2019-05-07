/*
ES6：编写高阶箭头函数
我们已经见识到了箭头函数在处理数据时候的强大之处。

箭头函数在类似map()，filter()，reduce()等需要其他函数作为参数来处理数据的高阶函数里会很好用。

阅读以下代码：

FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})
我们写下了filter函数，并尽量保证可读性。现在让我们用箭头函数来写同样的代码看看：

FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
这段代码完成了同样的任务，却变得更加简短易懂了。


使用箭头函数的语法来计算squaredIntegers数组里正整数的平方（分数不是整数）。
 */

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
    "use strict";
    // 在这行以下修改代码
    const squaredIntegers = arr.map((item)=>{if(Number.isInteger(item)) return item*item;}).filter((item)=>{return item!=undefined});
    // 在这行以上修改代码
    return squaredIntegers;
};
// 测试你的代码
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);