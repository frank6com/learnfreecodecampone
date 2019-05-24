/*
算法基础：单词的首字母大写
将给出的字符串中所有单词的第一个字母变成大写，并返回得到的字符串。请确保其余的字母是小写的。

出于练习的目的，“ the ”“ of ”等虚词的首字母也要大写。
 */

function titleCase(str) {
    let strArr = str.split(" ");
    for(let i = 0; i<strArr.length;i++){
        strArr[i] = strArr[i].toLowerCase().replace(/^\w/,strArr[i][0].toUpperCase());
    }
    return strArr.join(" ");
}

titleCase("I'm a little tea pot");