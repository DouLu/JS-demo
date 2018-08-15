/**
 *author:doulu
 *create time:2018-08-15
 *description:封装
 */
//构造函数模式，浪费内存
function Cat(name,color) {
    this.name = name;
    this.color = color;
}
let cat1 = new Cat('cc','blue');//cat1.constructor == Cat
let cat2 = new Cat('aa','yellow');//cat1 instanceof Cat//true

//prototype模式
function Dog(name,color) {
    this.name = name;
    this.color = color;
}
Dog.prototype.type = '拉布拉多犬';//共享属性
Dog.prototype.run = function () {
    console.log('running ...');
};

let dog1 = new Dog('LL','BLUE');
let dog2 = new Dog('UU','red');

console.log('同一内存地址：', dog1.run == dog2.run);//true

//isPrototypeOf()判断某个proptotype对象和某个实例之间的关系。
console.log( Dog.prototype.isPrototypeOf(dog1));//true
console.log( Cat.prototype.isPrototypeOf(dog2));

//in运算符,判断某个实例是否含有某个属性，不管是不是本地属性。
console.log( 'name' in dog1);
console.log( 'type' in dog2);

//hasOwnProperty(),判断某一个属性到底是本地属性，还是继承自prototype对象的属性。
console.log( dog1.hasOwnProperty('name'));//true
console.log( dog1.hasOwnProperty('type'));//false

//构造函数的继承
function Animal(){
    this.species = "动物";
}
function Fish(name,color){
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;

}
let fish1 = new Fish("小鱼儿","彩色");
console.log(fish1.species); // 动物

//prototype模式
function Bird(name,color) {
    this.name = name;
    this.color = color;
}
Bird.prototype = new Animal();//将Bird的prototype对象指向一个Animal的实例。
// 相当于完全删除了prototype 对象原先的值，然后赋予一个新值
//此时Bird.prototype.constructor指向Animal

Bird.prototype.constructor = Bird;//调整Bird.prototype.constructor指向Bird
let bird1 = new Bird('大雁','白色');
console.log(bird1.species);
