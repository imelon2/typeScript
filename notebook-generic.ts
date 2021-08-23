/**
 * generic : 통상적인, 일반적인
 *  제네릭 함수는 파라미터가 받는 함수에 따라서 return값의 타입이 정해짐
 */
{
  // 이게 제네릭 함수 주로 T 로 씀
  function checkNotNull<T>() {}
  /**
   * constrains : 제네릭에 조건을 부여함  < T extends Employee> {
   * }
   */

  const obj = {
    name: "ellie",
    age: 20,
  };

  const obj2 = {
    animal: "🐕",
  };
  //              object T 중에 있는 key 중 하나
  //                                                T에 있는 K 값을 리턴
  function getValue1<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue1(obj, "name")); // ellie
  console.log(getValue1(obj, "age")); // 20
  console.log(getValue1(obj2, "animal")); // 🐕
}
