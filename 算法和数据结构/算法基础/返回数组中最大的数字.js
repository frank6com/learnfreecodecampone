/*
* 算法基础：返回数组中最大的数字
返回一个数组，它要由给出的所有子数组中的最大值组成。简单起见，给出的数组总会包含4个子数组。

记得你可以在一个简单的 for 循环中遍历一个数组，并用 arr[i] 这样的语法来访问数组中的元素。
* */

function largestOfFour(arr) {
    // You can do this!
    let res = [];
    for(let i=0;i<arr.length;i++){
        res.push(arr[i].sort((a,b)=>{return b-a})[0]);
    }
    return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);