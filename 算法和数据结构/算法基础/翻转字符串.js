/*
算法基础：翻转字符串
反转给出的字符串。

你在反转字符串前可能需要将其切分成字符的数组。

你的结果必须是一个字符串。
 */

function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("hello");