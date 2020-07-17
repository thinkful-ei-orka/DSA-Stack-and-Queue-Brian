class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        let newNode = new _Node(data, this.top);
        this.top = newNode;
    }
    pop() {
        let topNode = this.top;
        this.top = topNode.next;
        return topNode.data;
    }
}

function peek(stack) {
    return stack.top;
}
function isEmpty(stack) {
    if (stack.top === null) {
        return true;
    }
    return false;
}
function display(stack) {
    let display = [];
    let node = stack.top;
    while (node !== null) {
        display.push(node.data);
        node = node.next;
    }
    return display;
}

function is_palindrome(s) {

    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('');
    let palindromeStack = new Stack;
    let bool = true;
    s.forEach(char => palindromeStack.push(char));
    s.forEach(char => {
        if(char !== peek(palindromeStack).data) {
            bool = false;
        }
        palindromeStack.pop();
    });
    return bool;
}

function balanceParens(expression) {
    let leftParens = 0;
    let rightParens = 0;
    for (let i = 0; i < expression.length; i++) {
      if (expression[i] === '(') {
        leftParens++;
      } else if (expression[i] === ')') {
        rightParens++;
      }
    }
    if (leftParens !== rightParens) {
      return false;
    }
    return true;
  }

function main() {
    let starTrek = new Stack;
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    starTrek.pop();
    starTrek.pop();

    starTrek.push('Scotty');


    console.log(display(starTrek));
    console.log(is_palindrome('racecar'));
    console.log(is_palindrome('A man, a plan, a canal: Panama'));
    console.log(balanceParens('1 + 2 + (1 + 3)'));
}

main();