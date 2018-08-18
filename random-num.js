/**
 *author:doulu
 *create time:2018-08-18
 *description:短信验证码，随机数生成器
 */
function verCode() {
    let codeArr = [],newArr = [];

    for(let i=0;i<1000;i++){
        if( i === 0){
            codeArr.push(randomStr());
            newArr = codeArr.slice();
        }else {
            newArr.push(randomStr());
            codeArr = isSame(newArr,codeArr).slice();
        }
    }
    //检查1000个验证码是否有重复
    console.log([...new Set(codeArr)].length);
}
function randomStr() {
    let sCode = '';
    for(let i=0;i<8;i++){
        sCode += Math.floor( Math.random() * 10 + 0);
    }
    return sCode;
}
function isSame(newArr,arr) {
    if([...new Set(newArr)].length === arr.length){
        newArr.push(randomStr());
        isSame(newArr,arr);
    }else {
        return newArr;
    }
}
verCode();