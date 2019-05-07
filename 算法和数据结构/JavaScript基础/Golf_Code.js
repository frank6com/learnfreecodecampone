/**
 JavaScript 基础：高尔夫代码
 在高尔夫golf游戏中，每个洞都有自己的标准杆数par，代表着距离。根据你把球打进洞所挥杆的次数strokes，可以计算出你的高尔夫水平。

 函数将会传送 2 个参数，分别是标准杆数par和挥杆次数strokes，根据下面的表格返回正确的水平段位。

 Strokes	    Return
 1	            "Hole-in-one!"
 <= par - 2	    "Eagle"
 par - 1	    "Birdie"
 par	        "Par"
 par + 1	    "Bogey"
 par + 2	    "Double Bogey"
 >= par + 3	    "Go Home!"
 par和strokes必须是数字而且是正数。

 */

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
// 请把你的代码写在这条注释以下
    if (strokes === 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
// 请把你的代码写在这条注释以上
}

// Change these values to test
golfScore(5, 4);