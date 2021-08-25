type ToDo = {
  title: string;
  description: string;
  label: string;
  priority: "high" | "low";
};

//Partial<T>
//기존의 타입 중에서 부분적인 곳만 허용하고 싶을 때
function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
  return { ...todo, ...fieldsToUpdate };
}

const todo: ToDo = {
  title: "leanrn TypeScript",
  description: "study herd",
  label: "study",
  priority: "high",
};

const udpated = updateTodo(todo, { priority: "low" });
console.log(udpated);
