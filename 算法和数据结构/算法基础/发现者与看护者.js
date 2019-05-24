/*
算法基础：发现者与看护者
请写一个函数来检查一个数组（第一个参数）中的元素，并返回数组中第一个通过校验测试（第二个参数，一个接受一个参数并返回一个布尔值的函数）的元素。如果没有元素通过测试，则返回 undefined。
 */

function findElement(arr, func) {
    for(let item of arr){
        if(func(item)) return item;
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);