interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  //불변성 유지 중요
  readonly value: string;
  readonly next?: StackNode;
};

class stackImpl implements Stack {
  // 내부에서만 쓰는 변수 표시
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string) {
    if (this._size === this.capacity) {
      throw new Error(" Stack is full");
    }
    const node: StackNode = { value, next: this.head }; // [st 1, null]  , [bob 2 , st 1], [el 3, bob 2]
    this.head = node;
    this._size++;
  }

  pop(): string {
    if (this.head == null) {
      throw new Error("Stack is empty!!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new stackImpl(10);
stack.push("steve 1");
stack.push("Bob 2");
stack.push("ellie 3");

while (stack.size !== 0) {
  console.log(stack.pop());
}
