interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNodeG<T> = {
  //불변성 유지 중요
  readonly value: T;
  readonly next?: StackNodeG<T>;
};

class stackImplG<T> implements Stack<T> {
  // 내부에서만 쓰는 변수 표시
  private _size: number = 0;
  private head?: StackNodeG<T>;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: T) {
    if (this._size === this.capacity) {
      throw new Error(" Stack is full");
    }
    const node: StackNodeG<T> = { value, next: this.head }; // [st 1, null]  , [bob 2 , st 1], [el 3, bob 2]
    this.head = node;
    this._size++;
  }

  pop(): T {
    if (this.head == null) {
      throw new Error("Stack is empty!!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stackG = new stackImplG<string>(10);
stackG.push("steve 1");
stackG.push("Bob 2");
stackG.push("ellie 3");

while (stackG.size !== 0) {
  console.log(stackG.pop());
}

const stack2 = new stackImplG<number>(10);
stack2.push(123);
stack2.push(345);
stack2.push(789);

while (stack2.size !== 0) {
  console.log(stack2.pop());
}
