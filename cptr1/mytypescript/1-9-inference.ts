{
    /**
     * Type Inference
     */

    let text = 'hello';
    // 따로 타입을 할당하지 않으면 'Any' 타입으로 저장
    function print(message) {
        console.log(message);
    }

    function add(x: number, y: number) {
        return x + y;
    }
        // 자동으로 number 타입 add는 숫자에만 쓰는 메소드니까!
    const result = add(1,2);
}