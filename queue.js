
 class _Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    //make new node last item on the queue
    this.last = node;
  }

  dequeue() {
    //if queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first; // 1
    this.first = this.first.next; // 1.next (2) => first(2)
    //if this is last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
  peek() {
    return this.first.value;
  }
  isEmpty() {
    if (this.first === null && this.last === null) {
      return true;
    }
    return false;
  }
  display() {
    let currQueue = this.first;
    if (this.isEmpty()) {
      return 'No data in Queue';
    }
    while (currQueue) {
      console.log(currQueue.value);
      currQueue = currQueue.next;
    }
    return;
  }
}


class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data, null, this.last);

    if (this.first === null) {
      this.first = node;
    }

    if(this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;
    this.first.prev = null;

    if(node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  peek() {
    return this.first.value;
  }

  isEmpty() {
    if (this.first === null && this.last === null) {
      return true;
    }
    return false;
  }

  display() {
    let currQueue = this.first;

    if (this.isEmpty()) {
      return 'No data in Queue';
    }

    while (currQueue) {
      console.log(currQueue.value);
      currQueue = currQueue.next;
    }
    return;
  }

}

function squareDance(queue) {
    const spareQueue = new Queue();
  
    let m = '';
    let f = '';

    let current = queue.first;
   
    while (current) {
        if (current.data.startsWith('F')) {
            if (f === '') {
                f = current.data.split(' ')[1];
            }
            else {
                spareQueue.enqueue(current.data);
            }
        }

        if (current.data.startsWith('M')) {
            if (m === '') {
                m = current.data.split(' ')[1];
            }
            else {
                spareQueue.enqueue(current.data);
            }
        }
     
        if (m && f) {
            console.log(`Female dancer is ${f}, and the male dancer is ${m}`);
            m = '';
            f = '';
        }
        
        if (spareQueue.first) {
            if (spareQueue.first.data.startsWith('M')) {
                if (m === '') { 
                    
                    m = spareQueue.dequeue();
                    m = m.split(' ')[1];
                }
            } else if (spareQueue.first.data.startsWith('F')) {
                if (f === '') {
                    console.log(m)
                    f = spareQueue.dequeue();
                    f = f.split(' ')[1];
                }
            }
        }

        console.log('hello')

        current = current.next;
    }

    let maleCount = 0;
    let femaleCount = 0;
    let spareCurrent = spareQueue.first;

    while (spareCurrent) {
        if (spareCurrent.data.startsWith('M')) {
            maleCount++;
        }
        if (spareCurrent.data.startsWith('F')) {
            femaleCount++;
        }
        spareCurrent = spareCurrent.next;
    }

    if (m) {
        maleCount++;
    }

    if (f) {
        femaleCount++;
    }

    if (maleCount) {
        console.log(`There are ${maleCount} male dancers waiting to dance`);
    }

    if (femaleCount) {
        console.log(`There are ${femaleCount} male dancers waiting to dance`);
    }

}

const testQueue = new Queue();
testQueue.enqueue('F Jane');
testQueue.enqueue('M Frank');
testQueue.enqueue('M John');
testQueue.enqueue('F Beyonce');
testQueue.enqueue('M Sherlock');
testQueue.enqueue('F Madonna');
testQueue.enqueue('M David');
testQueue.enqueue('M Christopher');



function main (){

    //const Node = require('./dqueue');

let starTrekQQ = new Queue;

starTrekQQ.enqueue('Kirk');
starTrekQQ.enqueue('Spock');
starTrekQQ.enqueue('Uhura');
starTrekQQ.enqueue('Sulu');
starTrekQQ.enqueue('Checkov');
console.log(starTrekQQ.peek());
console.log(starTrekQQ.isEmpty());
console.log(squareDance(testQueue));
starTrekQQ.display();

starTrekQQ.dequeue();s
starTrekQQ.dequeue();

console.log('Sppoooooooock');
starTrekQQ.display();
}

main()