// Create Node Class
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
}

const nodeOne = new Node(100);
nodeOne.add(33);
nodeOne.add(11);
nodeOne.add(22);

console.log(nodeOne);
