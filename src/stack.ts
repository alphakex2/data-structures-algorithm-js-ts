class Stack {
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

const st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)

console.log(st.peek())
