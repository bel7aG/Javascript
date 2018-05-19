//SectionOne
/*const nodeOne = {
  data: 123
};
const nodeTwo = {
  data: 456
};

let a = nodeOne.next = nodeTwo;
*/

//SectionTwo
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  size() {
    let countSize = 0;
    let node = this.head;
    while (node) {
      countSize++;
      node = node.next;
      console.log(node);
      console.log(this.head);
    }
    return countSize;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  getAt(index) {

    if (!this.head) {
      return null; //`list empty!`
    }

    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null; /*'Your Variable is out of Range!'*/

  }

  clear() {
      this.head = null;
  }

  removeFirst() {
    let node = this.head;
    node = node.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
                                  /*Lazémna nchéckiw 9ball YO*/
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head;
    let previous;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
    }

    const previous = this.getAt(index - 1);
    previous.next = previous.next.next;
    if (previous + 1) {
      return;
    }

  }

}

const nodeOne = new Node(66);
console.log(nodeOne);
const list = new LinkedList();
list.head = nodeOne;
list.insertFirst(55);
list.insertFirst(44);
list.insertFirst(33);
list.insertFirst(22);

list.insertLast('this is my Last Shit');
// console.log(list);
// list.size();
// list.removeLast();
console.log(list.getAt(2));

list.removeAt(3);

console.log(list)

console.log('------------');
