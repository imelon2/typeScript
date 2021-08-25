// this는 부르는 사람에 따라 변경될 수 있으므로, 
//class 내부에  애로우Fn () => 사용 || bind(); 사용

console.log(this);
function simpleFunc() {
    console.log(this);
}

simpleFunc(); // windeo
window.simpleFunc(); // window
console.clear();

class Counter {
    count = 0;
    increase = () => {
        console.log(this); // window
    }
}

const counter = new Counter();
counter.increase(); // Counter

const caller = counter.increase;
// 바인딩
//const caller = counter.increase.bind(counter);
caller(); // undefined

// function == window : 파일의 제일 최상위 
// const/let == undefined : 
// var == windwo : 선언의 상위버젼 사용 x

class Bob {

}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob