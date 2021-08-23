{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
        hasSugar? : boolean;
    }

    // 계약서 같은 아이
    interface CoffeeMaker {
        makeCoffee(shots:number): CoffeeCup;
    }
    
      
    
    class CoffeeMachineImpl implements CoffeeMaker {
        
        private static BEANS_GRAMM_PER_SHOT : number = 7 ; // class level
        private coffeeBeans: number = 0;// instance (object) level
    
        public constructor(Bean: number) {

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

    // 상속
    class CaffeLatteMachine extends CoffeeMachineImpl {
        constructor(beans: number, public readonly seriaNumber: string) {
            super(beans)
        }

        private steamMilk(): void {
            console.log("Steaming some mill...");
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            }
         }
        }


    class SweetcoffeeMaker extends CoffeeMachineImpl {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true,
            }
        }

    }
    
    const machines: CoffeeMaker[] = [
        new CoffeeMachineImpl(16),
        new CaffeLatteMachine(16, '1'),
        new SweetcoffeeMaker(16),
        new CoffeeMachineImpl(16),
        new CaffeLatteMachine(16, '1'),
        new SweetcoffeeMaker(16),
    ];

    machines.forEach(machine => {
        console.log('----------------');
        machine.makeCoffee(1);
    })

}