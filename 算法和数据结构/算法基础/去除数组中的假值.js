/*

算法基础：去除数组中的假值
从一个数组中移除所有假值（falsy values）。

JavaScript 中的假值有 false、null、0、""、undefined 和 NaN。

提示：请尝试将每一个值转换为一个布尔值（boolean）。
 */

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(Boolean(arr[i])) newArr.push(arr[i]);
    }
    return newArr;
}

bouncer([7, "ate", "", false, 9]);