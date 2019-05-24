/*
算法基础：将摄氏温度转换成华氏温度
将摄氏度转换为华氏度的算法为：摄氏度 × 9/5 + 32

输入参数 celsius 代表一个摄氏温度值。请你根据上述转换公式，将已定义好的 fahrenheit 变量赋值为对应的华氏温度的值。

你不需要顾虑 function 和 return 语句，它们会在之后的挑战中予以介绍。现在，你只需要使用你已学过的运算符。
 */

function convertToF(celsius) {
    let fahrenheit = celsius*9/5+32;
    return fahrenheit;
}

convertToF(30);