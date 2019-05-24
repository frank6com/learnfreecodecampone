/*
算法基础：真假测试
检查一个值是否是原始的布尔值（boolean）类型。返回 true 或者 false。

布尔值原始类型为 true 或者 false。
 */

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return bool===true||bool===false;
}

booWho(null);