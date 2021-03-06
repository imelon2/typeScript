{
//     // javaScript
//     function jsAdd1(num1, num2) {
//         return num1 + num2;
//     }

//     // typeScript
//     function Add(num1 : number, num2 : number) {
//         return num1 + num2;
//     }

//      // JavaScript π©
//   function jsFetchNum1(id) {
//     // code ...
//     // code ...
//     // code ...
//     return new Promise((resolve, reject) => {
//       resolve(100);
//     });
//   }

//      // typeScript                     return κ°μ νμ
//      function jsFetchNum2(id : string) : Promise<number> {
//         // code ...
//         // code ...
//         // code ...
//         return new Promise((resolve, reject) => {
//           resolve(100);
//         });
//       }
    
    // JavaScript β¨ => TypeScript
    // Optional parameter
    function printName1(firstName : string, lastName? : string) {
        console.log(firstName);
        console.log(lastName);
    }

    printName1('Steve', 'Jobs');
    printName1('wonHyeok');

    // Default parameter
    function printMessage(message : string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest parameter
    // λͺ¨λ  μ λ¬λλ νλΌλ―Έν°λ₯Ό κ°μ Έμ¨λ€ : λλ²μ λ°°μ΄ νμ
    function addNumbers(...number: number[]) : number {
        return number.reduce((a,b) => a + b);
    }

    console.log(addNumbers(1,2,3,4));
}