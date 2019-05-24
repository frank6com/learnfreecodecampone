/*
算法基础：查找字符串中最长的单词
返回给出的句子中最长的单词的长度。

你的返回应该是一个数字。
 */

function findLongestWordLength(str) {
    return str.split(' ').sort((a,b)=>{return b.length - a.length})[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");