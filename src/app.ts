class Stack2 {
  public data: any
  constructor() {
    this.data = []
  }
  push(data: any) {
    this.data.push(data)
  }
  pop() {
    return this.data.pop()
  }
  peek() {
    return this.data[this.data.length - 1]
  }
}

class QueueFromStack {
  public stack: Stack2
  public stack2: Stack2

  constructor() {
    this.stack = new Stack2()
    this.stack2 = new Stack2()
  }

  add(data: any) {
    this.stack.push(data)
  }
  remove() {
    while (this.stack.peek()) {
      this.stack2.push(this.stack.pop())
    }
    const val = this.stack2.pop()
    while (this.stack2.peek()) {
      this.stack.push(this.stack2.pop())
    }
    return val
  }
  peek() {
    while (this.stack.peek()) {
      this.stack2.push(this.stack.pop())
    }
    const val = this.stack2.peek()
    while (this.stack2.peek()) {
      this.stack.push(this.stack2.pop())
    }
    return val
  }
}

const qs = new QueueFromStack()
qs.add(1)
qs.add(2)
qs.add(3)
console.log(qs.remove())
console.log(qs.peek())
console.log(qs)
