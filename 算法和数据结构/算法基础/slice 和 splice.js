/*
算法基础：slice 和 splice
本挑战的输入参数为：两个数组和一个索引值。

请利用数组的 slice 和 splice 方法，将第一个数组中的所有元素依次复制到第二个数组中。

请从第二个数组中索引值为 n 的地方开始插入。

返回插入元素后的数组。输入的两个数组在函数执行前后要保持不变。
 */

function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice(0);
    // It's alive. It's alive!
    arr1.forEach((item)=>{newArr.splice(n,0,item);n++;});

    return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);