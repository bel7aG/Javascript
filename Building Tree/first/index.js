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

class Tree {
  constructor() {
    this.root = null;
  }
}

const nodeOne = new Node(100);
const tree = new Tree();
tree.root = nodeOne;
nodeOne.add(33);
nodeOne.add(11);
nodeOne.add(22);
nodeOne.remove(33);
console.log(tree);
