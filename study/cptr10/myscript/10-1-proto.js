// prototype 은 javascript에서 상속을 위한 타입

const x = {};
const y = {};
console.log(x);
console.log(y);

const array = [];

function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level
    // this.makeCoffee = (shot) => {
    //     console.log('making coffee...')
    // }
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shot) => {
    console.log('making coffee...')
}
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteeMachine(milk) {
    this.milk = milk;
}

LatteeMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteeMachine(123);
console.log(latteMachine)