{
  // constructor : instance를 만들 때 호출되는 함수
  // instance : 변수 + 기능

  // ex1)

  class CoffeeMaker1 {
    // let coffeeBeansGram : number = 7;
    // Class에서 변수는 let,const로 지정하지 않음
    //class level: class와 연결되어 있어서 object 마다 만들어지거나 생성되지 않음
    static Beans_Per_shot: number = 7; // class level
    coffeeBeansGram: number = 7; // instance (object) level

    constructor(coffeeBrans: number) {
      CoffeeMaker1.Beans_Per_shot; // class level this. 안해도됨
      this.coffeeBeansGram = coffeeBrans; // instance level : this.해야함
    }
  }
  // instance 생성
  //      new : 인스턴스 만든다 여기 ()가 constructor() 호출
  const maker1 = new CoffeeMaker1(32);
  console.log(maker1); // CoffeeMaker { coffeeBeansGram: 32 }

  //ex2)
  class CoffeeMaker2 {
    // 외부에서 보여지지 않음
    // private : 외부에서 직접적으로 변경하지 못하게 할 때 사용
    // protected : 외부에서 접근할 순 없지만, 상속된 자식관계는 접근 가능
    private static Beans_Per_shot: number = 7;
    coffeeBeansGram: number = 7;

    private constructor(coffeeBrans: number) {
      CoffeeMaker2.Beans_Per_shot;
      this.coffeeBeansGram = coffeeBrans;
    }

    static makeMachine(coffeeBeans: number) {
      return new CoffeeMaker2(coffeeBeans);
    }
  }
  // constructor이 private 되어 있으면 new로 생성 불가능
  const maker2 = CoffeeMaker2.makeMachine(32);
  console.log(maker2);

  // ex3)
  //get set
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }


    private internalAge = 4;

    // 호출 시
    get age(): number {
      return this.internalAge;
    }

    // 값을 받아 올 시
    set age(num: number) {
      if (num < 0) {
      }
      this.internalAge = num;
    }

    //             ==this.fristName         ==this.lastName
    constructor(private firstName: string, public lastName: string) {}
     }

  const user = new User('Steve', 'Jobs');
  // get/set fn명
  user.age = 6;
  console.log(user.fullName);



  //ex4 ) 
  // 계약서같은놈
  // 주로 외부적으로 사용되는 녀석
  interface CoffeeMaker {

  }

  //implements : interface 와 규약된 아이 임을 표시
  class CoffeeMaker3 implements CoffeeMaker {
    private static Beans_Per_shot: number = 7;
    coffeeBeansGram: number = 7;

    private constructor(coffeeBrans: number) {
      CoffeeMaker3.Beans_Per_shot;
      this.coffeeBeansGram = coffeeBrans;
    }

    static makeMachine(coffeeBeans: number) {
      return new CoffeeMaker3(coffeeBeans);
    }
  }

  const maker3 = CoffeeMaker3.makeMachine(32);
  console.log(maker3);

  // 자식 extends 부모 : 상속
  // super : 상속하는 부모의 코드를 호출 
  // Override : 자식 함수에서 부모함수를 덮어씌기 할수 있다

  //composition
 
  class machine extends CoffeeMaker1 {
      // composition
      constructor ( beans: number, milk: milkSteamer, suger : AutoSugarMixer) {
          super.(beans);
      }
  }

}
