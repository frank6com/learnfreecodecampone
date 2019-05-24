/*
算法基础：猴子吃香蕉
请写一个函数，将一个数组（第一个参数）分割成一组长度为 size（第二个参数）的数组，然后在一个二维数组中返回这些结果。
 */

function chunkArrayInGroups(arr, size) {
    // Break it up.
    let newArr = [],
        tempArr = [];
    for(let i=0;i<arr.length;i++){
        tempArr.push(arr[i]);
        if(tempArr.length === size||i==arr.length-1){
            newArr.push(tempArr);
            tempArr = [];
        }
    }

    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);