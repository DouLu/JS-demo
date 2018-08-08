/**
 *author:doulu
 *create time:2018-08-08
 *description:每个函数都包含两个非继承而来的方法：call()方法和apply()方法
 * 在特定的作用域中调用函数，等于设置函数体内this对象的值，以扩充函数赖以运行的作用域
 * this总是指向调用某个方法的对象，但是使用call()和apply()方法时，就会改变this的指向
 */
// window.color = 'red';
// document.color = 'blue';
let myColor = {
    color:'yellow'
};
let color = {
    color:'red'
};
function thisColor() {
    // this.color = 'blue';这句话不注释，则结果全为blue
    console.log(this.color);
}

thisColor();//blue
thisColor.call(myColor);//yellow
thisColor.call(color);//red

let Pet = {
    words : '...',
    speak : function (say) {
        console.log(say + ' '+ this.words)
    }
};
Pet.speak('Speak'); // 结果：Speak...

let Dog = {
    words:'Wang'
};
//将this的指向改变成了Dog
Pet.speak.call(Dog, 'Speak'); //结果： SpeakWang

function Pets(words){
    this.words = words;
    this.speak = function () {
        console.log( this.words)
    }
}
function Dogs(words){
    //Pets.call(this, words); //结果： Wang
    Pets.apply(this, arguments); //结果： Wang
}
let dog = new Dogs('Wang');
dog.speak();
/**
 * apply()方法 接收两个参数，一个是函数运行的作用域（this），另一个是参数数组
 * call()方法 第一个参数和apply()方法的一样，但是传递给函数的参数必须列举出来
 */

