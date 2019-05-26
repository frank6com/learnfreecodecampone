/*
函数式编程：应用函数式编程将字符串转换为URL片段
最后几个挑战中涵盖了许多符合函数式编程原则并在处理数组和字符串中非常有用的方法。我们还学习了强大的、可以将问题简化为更简单形式的reduce方法，从计算平均值到排序，任何数组操作都可以用它来实现。回想一下，map和filter方法都是reduce的特殊实现。

让我们把学到的知识结合起来解决一个实际问题。

许多内容管理站点（CMS）为了让添加书签更简单，会将帖子的标题添加到 URL 上。举个例子，如果你写了一篇标题为 "Stop Using Reduce" 的帖子，URL很可能会包含标题字符串的某种形式 (如：".../stop-using-reduce")，你可能已经在 freeCodeCamp 网站上注意到了这一点。


填写urlSlug函数，使其转换字符串title带有连字符号的 URL 版本。您可以使用本节中介绍的任何方法，但不要用replace方法。以下是本次挑战的要求：

输入包含空格和标题大小写单词的字符串

输出字符串，单词之间的空格用连字符(-)替换

输出应该是小写字母

输出不应有任何空格
 */

// 全局变量
var globalTitle = "Winter Is Coming";

// 请在本行以下添加你的代码
function urlSlug(title) {
    return title.toLowerCase().trim().split(/\s+/).join('-');
}
// 请在本行以上添加你的代码

var winterComing = urlSlug(globalTitle); // 应为 "winter-is-coming"