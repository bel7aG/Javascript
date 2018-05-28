// Create Node Class
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children =   this.children.filter((node) => node.data !== data);
  }
}

const nodeOne = new Node(100);
nodeOne.add(33);
nodeOne.add(11);
nodeOne.add(22);
console.log(nodeOne);


nodeOne.remove(33);

console.log(nodeOne);
