/*
算法基础：检查字符串的结尾
检查一个字符串（第一个参数， str ）是否以给定的字符串（第二个参数 target ）结束。

本题目可以用 ES2015 引入的 .endsWith() 方法来解决。但本挑战的目的是让你使用 JavaScript 的一个 substring 方法。

如果你有任何疑问，可以访问 Read-Search-Ask 。请你独立解决挑战中的问题。
*/

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    return str.slice(-target.length) === target;
}

confirmEnding("Bastian", "n");