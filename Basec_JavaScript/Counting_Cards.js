/*
JavaScript 基础：21点游戏
在赌场 21 点游戏中，玩家可以通过计算牌桌上已经发放的卡牌的高低值来让自己在游戏中保持优势，这就叫 21 点算法。

根据下面的表格，每张卡牌都分配了一个值。如果卡牌的值大于 0，那么玩家应该追加赌注。反之，追加少许赌注甚至不追加赌注。

Count Change	    Cards
+1	                2, 3, 4, 5, 6
0	                7, 8, 9
-1	                10, 'J', 'Q', 'K', 'A'

你需要写一个函数实现 21 点算法，它根据参数card的值来递增或递减变量count，函数返回一个由当前count和Bet(count>0)或Hold(count<=0) 拼接的字符串。注意count和"Bet"或Hold应该用空格分开。

例如：
-3 Hold
5 Bet

提示
既然 card 的值为 7、8、9 时，count 值不变，那我们就可以忽略这种情况。

 */

var count = 0;

function cc(card) {
    // 请把你的代码写在这条注释以下
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    if(count>0) return count + ' Bet';
    else return count + ' Hold';

    // 请把你的代码写在这条注释以上
}

// 你可以在这里添加/删除 cc 方法的调用来测试结果
// 提示: 左边只会显示最后一次执行的返回值
cc(2); cc(3); cc(4); cc(5); console.log(cc(6));