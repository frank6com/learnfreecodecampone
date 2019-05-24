/*
算法基础：我身在何处
返回数组（第一个参数）被排序后，将一个值（第二个参数）插入到该数组中而使数组保持有序的最小的索引。返回的值应该是一个数字。

例如，getIndexToIns([1,2,3,4], 1.5) 应该返回 1 因为 1.5 大于 1 （索引为 0），但小于 2（索引为 1）。

同样地，getIndexToIns([20,3,5], 19) 应该返回 2 因为数组被排序后会变成 [3,5,20]，而 19 小于 20（索引为 2）且大于 5（索引为 1）。
 */

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort((a,b)=>{return a-b});
    for(let i=0;i<arr.length;i++){
        if(num<=arr[i]){
            console.log(i,arr);
            return i;
        }
    }
    return arr.length;
}

getIndexToIns([40, 60], 50);