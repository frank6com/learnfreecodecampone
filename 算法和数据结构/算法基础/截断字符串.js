/*
算法基础：截断字符串
如果一个字符串（第一个参数）的长度大于给出的值（第二个参数），则截断它并在其后加上 ... 。返回被截断的字符串。
 */

function truncateString(str, num) {
    // Clear out that junk in your trunk
    return str.length > num ? str.slice(0,num)+'...' : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);