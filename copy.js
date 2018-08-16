/**
 *author:doulu
 *create time:2018-08-16
 * https://juejin.im/post/59ac1c4ef265da248e75892b
 *description:深拷贝和浅拷贝的主要区别就是其在内存中的存储类型不同
 * 栈（stack）为自动分配的内存空间，它由系统自动释放；
 * 堆（heap）则是动态分配的内存，大小不定也不会自动释放。
 * 1、基本数据类型值不可变。基本类型的比较是值的比较
 *2、引用类型（object）是存放在堆内存中的，变量实际上是一个存放在栈内存的指针，
 * 这个指针指向堆内存中的地址。每个空间大小不一样，要根据情况开进行特定的分配
 * 3、引用类型值可变，引用类型的比较是引用的比较
 */
{
    let a = 1;
    let b = 1;
    console.log(a === b);//true
}
{
    let a = 1;
    let b = true;
    console.log(a == b);//true
}
{
    let a = [1,2,3];
    a[1] = 5;
    console.log(a); // [1,5,3]

    let str = 'abc';
    str[0] = 'f';
    console.log(str);//'abc'
}
{
    let a = [1,2,3];
    let b = [1,2,3];
    console.log(a === b); // false,a，b指向不同的对象
}
//传值、传址
{
    //基本类型的赋值的两个变量是两个独立相互不影响的变量。
    let a = 10;
    let b = a;
    a ++ ;
    console.log(a); // 11
    console.log(b); // 10
}
{
    let a = {}; // a保存了一个空对象的实例
    let b = a;  // a和b都指向了这个空对象
    a.name = 'jozo';
    console.log(a.name); // 'jozo'
    console.log(b.name); // 'jozo'

    b.age = 22;
    console.log(b.age);// 22
    console.log(a.age);// 22

    console.log(a == b);// true
}

/**
 * 深拷贝：将 B 对象拷贝到 A 对象中，包括 B 里面的子对象，
 * 浅拷贝：将 B 对象拷贝到 A 对象中，但不包括 B 里面的子对象
 * 【浅拷贝只复制一层对象的属性，并不包括对象里面的为引用类型的数据】
 */
let obj1 = {
    'name' : 'zhangsan',
    'age' :  '18',
    'language' : [1,[2,3],[4,5]],
};

let obj2 = obj1;
let obj3 = shallowCopy(obj1);
function shallowCopy(src) {
    let dst = {};
    for (let prop in src) {
        if (src.hasOwnProperty(prop)) {
            dst[prop] = src[prop];
        }
    }
    return dst;
}

obj2.name = "lisi";
obj3.age = "20";

obj2.language[1] = ["二","三"];
obj3.language[2] = ["四","五"];

console.log(obj1);
//obj1 = {
//    'name' : 'lisi',
//    'age' :  '18',
//    'language' : [1,["二","三"],["四","五"]],
//};

console.log(obj2);
//obj2 = {
//    'name' : 'lisi',
//    'age' :  '18',
//    'language' : [1,["二","三"],["四","五"]],
//};

console.log(obj3);
//obj3 = {
//    'name' : 'zhangsan',
//    'age' :  '20',
//    'language' : [1,["二","三"],["四","五"]],
//};

//递归浅拷贝，实现对象的深拷贝
let initObj = {
    'name' : 'zhangsan',
    'age' :  '18',
    'language' : [1,[2,3],[4,5]],
    'child':{
        'cName':'lev1',
        'lNode':'2',
        'lang':[2,6,3]
    }
};
function deepCopy(target,source) {
    for(key in source){
        if(source[key] instanceof Object){
            // source[key] 是对象，而 target[key] 不是对象， 则 target[key] = {} 初始化一下，否则递归会出错的
            if((source[key] instanceof Object) && !(target[key] instanceof Object)){
                target[key] = {};
            }

            // source[key] 是数组，而 target[key] 不是数组，则 target[key] = [] 初始化一下，否则递归会出错的
            if((source[key] instanceof Array) && !( target[key] instanceof Array)){
                target[key] = [];
            }
            // 执行递归
            deepCopy(target[key], source[key]);
        } else if (source[key] !== undefined) {
            // 不满足以上条件，说明 source[key] 是一般的值类型，直接赋值给 target 就是了
            target[key] = source[key];
        }
    }
}
let deepObj = {};
deepCopy(deepObj,initObj);
deepObj.name = 'change';
deepObj.child.cName = 'hahah';
console.log(JSON.stringify(initObj));
console.log(JSON.stringify(deepObj));