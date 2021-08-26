{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // 계약서 같은 아이
    interface CoffeeMaker {
        makeCoffee(shots:number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots:number): CoffeeCup;
        fillCoffeeBeans(beans: number) :void;
        clean() : void ;

        
    }

    class CoffeeMachineImpl implements CoffeeMaker, CommercialCoffeeMaker {

        private static BEANS_GRAMM_PER_SHOT : number = 7 ; // class level
        private coffeeBeans: number = 0;// instance (object) level
    
        private constructor(Bean: number) {

            this.coffeeBeans = Bean;
        }

        static makeMachine(coffeeBeans : number): CoffeeMachineImpl {
            return new CoffeeMachineImpl(coffeeBeans);
        }

        public fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error("value for beans should be greater than 0 !!");
            }
            this.coffeeBeans += beans;
        }

         public clean() {
            console.log("cleaning the machine...")
        }

        private grindBeans(shots : number) {
            console.log(`grinding Beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachineImpl.BEANS_GRAMM_PER_SHOT) {
                 throw new Error("Not enoygh coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMachineImpl.BEANS_GRAMM_PER_SHOT;
        }
        private preheat() {
            console.log("heating up...~!")
        }

        private extract(shots: number) : CoffeeCup {
            console.log(`Pulling ${shots} shots... ☕️`);
            return {
                shots,
                hasMilk : false
            }
        }

        makeCoffee(shots: number) : CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

    }



    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee); 
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee); 
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker: CoffeeMachineImpl = CoffeeMachineImpl.makeMachine(32) ;
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    amateur.makeCoffee();
    pro.makeCoffee();

}