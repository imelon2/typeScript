{
    /**
     * Type Aliases
     */

    type Text = string;
    const name : Text = 'wonhyeok';

    type Num = number;
    const age : Num = 3;

    type Strudent {

        name : string;
        age : number;
    }
    
    const student : Strudent = {
        name : 'steve',
        age : 12
    }

    /**
     * String Literal Types
     */
    type Name = 'name';
    let wonName : Name;
    wonName = 'name';

    type JSON = 'json';
    const json:JSON = 'json';

    type boal = true;
    const Real : boal = true;
}