/*

算法基础：集合之间的关系
输入参数是一个有两个字符串元素的数组。如果第一个字符串中包含了第二个字符串中的所有字母，则返回 true。

例如，["hello", "Hello"] 应该返回 true 因为第一个字符串中包含了第二个字符串中出现的所有字母（忽略大小写）。

而 ["hello", "hey"] 应该返回 false 因为第一个字符串 "hello" 没有包含字母 "y"。

最后，["Alien", "line"], 应该返回 true，因为 "line" 中的所有字母都被包含在 "Alien" 中。
 */

function mutation(arr) {
    let res = "";
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();
    for(let i=0;i<str2.length;i++){
        if(str1.indexOf(str2[i])>=0){
            res+=str2[i];
            continue;
        }
    }
    return res === str2;
}

mutation(["hello", "hey"]);