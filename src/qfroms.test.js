class Stack2 {
  constructor() {
    this.data = []
  }
  push(data) {
    this.data.push(data)
  }
  pop() {
    return this.data.pop()
  }
  peek() {
    return this.data[this.data.length - 1]
  }
}

class Queue {
  constructor() {
    this.stack = new Stack2()
    this.stack2 = new Stack2()
  }

  add(data) {
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
test("Queue is a class", () => {
  expect(typeof Queue.prototype.constructor).toEqual("function")
})

test("can add elements to a queue", () => {
  const q = new Queue()
  expect(() => {
    q.add(1)
  }).not.toThrow()
})

test("can remove elements from a queue", () => {
  const q = new Queue()
  expect(() => {
    q.add(1)
    q.remove()
  }).not.toThrow()
})

test("Order of elements is maintained", () => {
  const q = new Queue()
  q.add(1)
  q.add(2)
  q.add(3)
  expect(q.remove()).toEqual(1)
  expect(q.remove()).toEqual(2)
  expect(q.remove()).toEqual(3)
  expect(q.remove()).toEqual(undefined)
})

test("peek returns, but does not remove, the first value", () => {
  const q = new Queue()
  q.add(1)
  q.add(2)
  expect(q.peek()).toEqual(1)
  expect(q.peek()).toEqual(1)
  expect(q.remove()).toEqual(1)
  expect(q.remove()).toEqual(2)
})
