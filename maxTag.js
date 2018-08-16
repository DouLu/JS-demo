/**
 *author:doulu
 *create time:2018-08-16
 *description:找出页面使用最多的标签已经标签使用次数
 */
let tags = document.getElementsByTagName('*');
let tagNames = [];
for(let i=0;i<tags.length;i++){
    tagNames.push(tags[i].tagName);
}
let sTag = [... new Set(tagNames)];
let tagMap = new Map();
for(let i=0;i<sTag.length;i++){
    let count = 0;
    for(let j=0;j<tagNames.length;j++){
        if(sTag[i] == tagNames[j]){
            count ++;
        }
    }
    tagMap.set(sTag[i],count);
}
let maxNumTag = '',maxNumTagCount = 0;
tagMap.forEach(function (val,key ,map) {
    let maxNum = [...tagMap.values()].sort()[sTag.length-1];
    if(val == maxNum){
        maxNumTag = key;
        maxNumTagCount = val;
    }
});
console.log(maxNumTag,maxNumTagCount);