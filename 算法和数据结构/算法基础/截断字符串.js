/*
算法基础：截断字符串
如果一个字符串（第一个参数）的长度大于给出的值（第二个参数），则截断它并在其后加上 ... 。返回被截断的字符串。
 */

function truncateString(str, num) {
    // Clear out that junk in your trunk
    return str.length > num ? str.slice(0,num)+'...' : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


/*
.cn的题略有不同，解法如下。

截断字符串

（用瑞兹来截断对面的退路）

如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。

切记，插入到字符串尾部的三个点号也会计入字符串的长度。

但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。

当你完成不了挑战的时候，记得开大招'Read-Search-Ask'。

这是一些对你有帮助的资源:

String.slice()

 */

function truncate(str, num) {
    // 请把你的代码写在这里
    return num <=3 ? str.slice(0,num)+'...': str.length > num ? str.slice(0,num-3)+'...' : str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);