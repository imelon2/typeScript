// Readonly<T> : 읽을 수만 있는 타입

type ToDo = {
  title: string;
  description: string;
};

function display(todo: Readonly<ToDo>) {
  // todo.title = 'change'; 읽기전용이기 때문에 변경 불가능
  return todo;
}

const type: ToDo = {
  title: "steve",
  description: "name",
};
const todoFn = display(type);
