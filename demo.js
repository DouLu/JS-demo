/**
 *author:doulu
 *create time:2018-08-06
 *description: JS语法分析
 */
/*for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(new Date, i);
    }, 1000);
}
console.log('11',new Date, i);

for (var i = 0; i < 5; i++) {
    (function (j) {  // j = i
        setTimeout(function () {
            console.log(new Date, j);
        }, 2000);
    })(i);
}
console.log('22',new Date, i);

var output = function (i) {
    setTimeout(function () {
        console.log(new Date, i);
    }, 3000);
};
for (var i = 0; i < 5; i++) {
    output(i);  // 这里传过去的 i 值被复制了
}
console.log(new Date, i);

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}
// console.log(new Date, i);//i 只存在于循环内部

for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(new Date, j);
        }, 1000 * j);// 这里修改 0~4 的定时器时间
    })(i);
}
setTimeout(function () { // 这里增加定时器，超时设置为 5 秒
    console.log(new Date, i);
}, 1000 * i);


const tasks = [];
for (var i = 0; i < 5; i++) {   // 这里 i 的声明不能改成 let，如果要改该怎么做？
    ((j) => {
        tasks.push(new Promise((resolve) => {
            setTimeout(() => {
                console.log(new Date, j);
                resolve();  // 这里一定要 resolve，否则代码不会按预期 work
            }, 1000 * j);   // 定时器的超时时间逐步增加
        }));
    })(i);
}
Promise.all(tasks).then(() => {
    setTimeout(() => {
        console.log(new Date, i);
    }, 1000);   // 注意这里只需要把超时设置为 1 秒
});

const tasks = [];
for(let i=0;i<5;i++){
    tasks.push(new Promise((resolve) => {
        setTimeout(() => {
            console.log(new Date, i);
            resolve(i);
        },1000*i);
    }));
}
Promise.all(tasks).then((i) => {
    setTimeout(() => {
        console.log(new Date,i.length, i);
    },1000);
});


const tasks = []; // 这里存放异步操作的 Promise
const output = (i) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(new Date, i);
        resolve();
    }, 1000 * i);
});// 生成全部的异步操作
for (var i = 0; i < 5; i++) {
    tasks.push(output(i));
}// 异步操作完成之后，输出最后的 i
Promise.all(tasks).then(() => {
    setTimeout(() => {
        console.log(new Date, i);
    }, 1000);
});*/

// 模拟其他语言中的 sleep，实际上可以是任何异步操作
const sleep = (timeountMS) => new Promise((resolve) => {
    setTimeout(resolve, timeountMS);
});
(async () => {  // 声明即执行的 async 函数表达式
    for (var i = 0; i < 5; i++) {
        await sleep(1000);
        console.log(new Date, i);
    }
    await sleep(1000);
    console.log(new Date, i);
})();
