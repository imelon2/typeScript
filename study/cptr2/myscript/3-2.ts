{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // 기능을 묶어 두는 역할
    class CoffeeMaker {

        //변하지 않는 숫자 인데 호출될때마나 나오면 
        // 메모리 낭비 니까 static로 잠금(=const)
        static BEANS_GRAMM_PER_SHOT : number = 7 ; // class level
        coffeeBeans: number = 0;// instance (object) level
    
        constructor(Bean: number) {
            //coffeebeans 설정
            this.coffeeBeans = Bean;
        }

        // class level 
        // 없으면 만들어진 object에서 사용해야함 ex) maker2.makeMachine
        static makeMachine(coffeeBeans : number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number) : CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enoygh coffee beans!");
            }
    
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    
            return {
                //shots : shots,
                shots,
                hasMilk : false
            }
        }

    }

    const maker = new CoffeeMaker(32) ;
    console.log(maker);
    const maker2 = new CoffeeMaker(14) ;
    console.log(maker2);

    const maker3 = CoffeeMaker.makeMachine(3);
    console.log(maker3);

    const maker4 = new CoffeeMaker(40);
    maker4.makeCoffee(3);
    console.log(maker4);
}