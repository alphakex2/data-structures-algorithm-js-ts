class NodeQueue {
  public data: any
  constructor() {
    this.data = []
  }
  enqueue(data: any) {
    this.data.unshift(data)
  }
  dequeue() {
    return this.data.pop()
  }
}

const t = new NodeQueue()
t.enqueue(12)
t.enqueue(13)
t.enqueue(14)
t.enqueue(15)
console.log(t.data)
console.log(t.dequeue())
console.log(t)
