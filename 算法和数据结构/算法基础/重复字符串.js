/*
* 算法基础：重复字符串
将一个给定的字符串（第一个参数， str )重复 num （第二个参数）次。如果 num 不是一个正数，返回一个空字符串。
* */

function repeatStringNumTimes(str, num) {
    // repeat after me
    let res = "";
    while(num>0){
        res +=str;
        num--;
    }
    console.log(res);
    return res;
}

repeatStringNumTimes("abc", 3);