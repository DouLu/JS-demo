function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";
let arr = [1,2,3];

console.log(greeter(user));
// console.log(greeter());
// console.log(greeter(arr));

//接口：对值所具有的结构进行类型检查
interface Person {
    firstName: string;
    lastName: string;
}
function greeter1(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user1 = { firstName: "Jane", lastName: "User" };

console.log(greeter1(user1));


class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person1 {
    firstName: string;
    lastName: string;
}
function greeter2(person : Person1) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = new Student("Jane", "M.", "User");
console.log(greeter2(user2));

//可选属性
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log(mySquare);