{
    // JavaScript
    //let ES6
    let name = 'hello';
    name = 'hi';

   /**
    * JavaScript
    * Primitive : number, string, boolean, bigint, symbol,null, undifine
    * Object : function, array...
    */

    // number type
    const num:number = 3;

    // string
    const str:string = 'hello';

    //boolean
    const boal:boolean = true;

    //  undefined
    let age:number | undefined; //더 많이 씀
    age = undefined;
    age = 1;

    function find() number | undefined {
        return undefined;
    }
    
    //  null
    let person:string|null;
    person = '';
    person = null;

    // unknown
    let notSure : unknown; // 가능하면 쓰지말 것
    notSure = 0;
    notSure = 'string';

    //  any
    let anything : any; // 가능하면 쓰지말 것
    anything = 0 ;
    anything = 'string';

    // void
    function print() : void {
        console.log('hello');

        //return 없으면 void
        // return이 없으면 defoult로 생략 가능
    }

    //never
    function throwError(message: string) :never {
        // return 가능성 없음
        //ex) while

        throw new Error(message);

    }

    // object
    let obj: object;
    
}