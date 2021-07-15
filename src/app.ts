class NodeQueueWeave {
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
  peek() {
    return this.data[this.data.length - 1]
  }
}

let q1 = new NodeQueueWeave()
let q2 = new NodeQueueWeave()

q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.enqueue(4)
q2.enqueue("one")
q2.enqueue("two")
q2.enqueue("three")
q2.enqueue("four")

function weave(arr1: NodeQueueWeave, arr2: NodeQueueWeave) {
  let results = new NodeQueueWeave()

  while (arr1.peek() || arr2.peek()) {
    if (arr1.peek()) {
      results.enqueue(arr1.dequeue())
    }
    if (arr2.peek()) {
      results.enqueue(arr2.dequeue())
    }
  }

  return results
}

console.log(weave(q1, q2))
