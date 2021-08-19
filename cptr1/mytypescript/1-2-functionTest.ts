{
//     // javaScript
//     function jsAdd1(num1, num2) {
//         return num1 + num2;
//     }

//     // typeScript
//     function Add(num1 : number, num2 : number) {
//         return num1 + num2;
//     }

//      // JavaScript 💩
//   function jsFetchNum1(id) {
//     // code ...
//     // code ...
//     // code ...
//     return new Promise((resolve, reject) => {
//       resolve(100);
//     });
//   }

//      // typeScript                     return 값의 타입
//      function jsFetchNum2(id : string) : Promise<number> {
//         // code ...
//         // code ...
//         // code ...
//         return new Promise((resolve, reject) => {
//           resolve(100);
//         });
//       }
    
    // JavaScript ✨ => TypeScript
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
    // 모든 전달되는 파라미터를 가져온다 : 넘버의 배열 타입
    function addNumbers(...number: number[]) : number {
        return number.reduce((a,b) => a + b);
    }

    console.log(addNumbers(1,2,3,4));
}