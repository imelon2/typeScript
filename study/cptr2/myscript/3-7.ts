{
  // 상속의 문제점
  // 상속은 많으면 많아질 수록 복잡해진다.
  // typescript는 한개 이상의 부모를 상속할 수 없다!! == extends 는 한개만 가능
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  // 계약서 같은 아이
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CoffeeMachineImpl implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    public constructor(Bean: number) {
      this.coffeeBeans = Bean;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachineImpl {
      return new CoffeeMachineImpl(coffeeBeans);
    }

    public fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0 !!");
      }
      this.coffeeBeans += beans;
    }

    public clean() {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log(`grinding Beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachineImpl.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enoygh coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachineImpl.BEANS_GRAMM_PER_SHOT;
    }
    private preheat() {
      console.log("heating up...~!");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some mill...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 고급 우유 거품기
  class FencyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy Steaming some mill...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 차가운 고급 우유 거품기
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Cold Milk Steaming some mill...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  //설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSuger() {
      console.log("Getting some sugar from jar ");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  //재대로된 제조기
  class SugarMixer implements SugarProvider {
    private getSuger() {
      console.log("Getting some sugar from jar ");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  // 상속
  class CaffeLatteMachine extends CoffeeMachineImpl {
    constructor(
      beans: number,
      public readonly seriaNumber: string,
      private milkFrother: MilkFrother
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMile(coffee);
    }
  }

  class SweetcoffeeMaker extends CoffeeMachineImpl {
    constructor(private beans: number, private sugar: SugarProvider) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachineImpl {
    constructor(
      private beans: number,
      private milk: MilkFrother,
      private suger: SugarProvider
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.milk.makeMilk(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  //
  const CheapMilkMaker = new CheapMilkSteamer();
  const FancyMilkMaker = new FencyMilkSteamer();
  const ColdMilkMaker = new ColdMilkSteamer();

  //
  const candySuger = new CandySugarMixer();
  const sugar = new SugarMixer();

  //
  const sweetCandyMachine = new SweetcoffeeMaker(12, candySuger);
  const sweetMachine = new SweetcoffeeMaker(12, candySuger);

  const latteMachine = new CaffeLatteMachine(12, "ss", CheapMilkMaker);
  const coldLatteMachine = new CaffeLatteMachine(12, "ss", ColdMilkMaker);
  const sweetLatteMachine = new SweetCaffeLatteMachine(
    12,
    CheapMilkMaker,
    candySuger
  );

  const machines: CoffeeMaker[] = [
    new CoffeeMachineImpl(16),
    new CaffeLatteMachine(16, "1"),
    new SweetcoffeeMaker(16),
    new CoffeeMachineImpl(16),
    new CaffeLatteMachine(16, "1"),
    new SweetcoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("----------------");
    machine.makeCoffee(1);
  });
}
