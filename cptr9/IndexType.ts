// object 호출하는 법
const obj = { name: "steve" };

//호출 방법
obj.name; // steve
obj["name"]; // steve

// type 호출하는 법
type Animal = {
  name: string;
  age: number;
  gender: "male" | "female";
};
// indexType
type Name = Animal["name"]; // Name 는 이제 string type
const text: Name = "steve"; // string type

type Gender = Animal["gender"]; // Gender 는 이제 gender: "male" | "female" tpye
const genderTest1: Gender = "male";
const genderTest2: Gender = "female";

type Keys = keyof Animal; /**Animal 이 가진 key값이 type이 됨
                            Keys 는 이제 'name' | 'age' | 'gender' type */
const key1: Keys = "age";
const key2: Keys = "gender";
const key3: Keys = "name";

type Person = {
  name: string;
  gender: Animal["gender"];
};
const person: Person = {
  name: "steve",
  gender: "female",
};
