{
    // array
    const fruits : string[] = ['a', 'b', 'c'];
    const scroes : Array<number> = [1,3,4];

    function printArray(fruits: readonly string[]) {

    }

    // Tuple 배열이긴 하지만, 서로 다른 타입을 가질 수 있다 사용 권장하지 않음
    // 주로 interface, type alias, class 로 대신 쓴다
    let student: [string, number] ;
    student = ['이름', 123];
    student[0] // '이름'
    student[1] // 123

    
}