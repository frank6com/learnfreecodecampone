/*

JavaScript 基础：记录集合
你将获得一个 JSON 对象，用来表示你的部分音乐专辑收藏。每张专辑都有几个属性和一个唯一的 id 号作为键值。并非所有专辑都有完整的信息。

写一个函数，根据传入的id（如2548）、prop（属性，如"artist"或"tracks"）以及value（值，如"Addicted to Love"）来修改音乐专辑收藏的数据。

如果属性prop不是"tracks"且值value不为空（""），则更新或设置该专辑属性的值value。

你的函数必须始终返回整个音乐专辑集合对象。

处理不完整数据有几条规则：

如果属性prop是"tracks"，但是专辑没有"tracks"属性，则在添加值之前先给"tracks"创建一个空数组。

如果prop是"tracks"，并且值value不为空（""）， 把值value添加到tracks数组中。

如果值value为空（""），则删除专辑的这一属性prop

提示：
当通过变量访问对象的属性时，应使用中括号。

Push 是一个数组方法，详情请查看Mozilla Developer Network.

你可以参考这一节的内容Manipulating Complex Objects复习相关知识。
 */

// 初始化变量
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// 复制 collection 以便测试
var collectionCopy = JSON.parse(JSON.stringify(collection));

// 请把你的代码写在这条注释以下
function updateRecords(id, prop, value) {
    if(prop != 'tracks' && value != ''){
        collection[id][prop] = value;
    }
    if(prop == 'tracks'){
        if(!collection[id].hasOwnProperty('tracks')){
            collection[id].tracks = [];
        }
        if(value!=""){
            collection[id].tracks.push(value);
        }
    }
    if(value==""){
        delete collection[id][prop];
    }

    return collection;
}

// 你可以修改这一行来测试你的代码
updateRecords(5439, "artist", "ABBA");
