{
    /**
     * type Assertions 이거 좋은거 아님 ㅋㅋ
     */

    function jsStrFunc() : any {
        return 'hello';
    }
    const result = jsStrFunc();

    // 케스팅 작업
    console.log((result as string).length);
    

    const wrong: any = 5;
    console.log((wrong as string).length);
}