{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }


    // public (default)
    // private 외부 접근 금지
    // protected 상속 시, 외부접근 불가능 but 상속된 자식은 접근 가능
    class CoffeeMaker {

        private static BEANS_GRAMM_PER_SHOT : number = 7 ; // class level
        private coffeeBeans: number = 0;// instance (object) level
    
        private constructor(Bean: number) {

            this.coffeeBeans = Bean;
        }

        static makeMachine(coffeeBeans : number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        public fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error("value for beans should be greater than 0 !!");
            }
            this.coffeeBeans += beans;
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

    const maker = CoffeeMaker.makeMachine(32) ;

    class User {
        get fullName() : string {
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;

        get age() : number {
            return this.internalAge;
        }

        set age(num : number) {
            this.internalAge = num;
        }

        constructor (private firstName: string, private lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    const user = new User('steve' , 'jobs');
    console.log(user.fullName);

    user.age = 6;
}