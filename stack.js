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

function isPalindrome(str) {

    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('');
    let palindromeStack = new Stack;
    let bool = true;
    str.forEach(curItem => palindromeStack.push(curItem));
    str.forEach(curItem => {
        if (curItem !== peek(palindromeStack).data) {
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
//   const peek = (stack) => console.log(stack.top.data);


//   const isEmpty = stack => stack.top === null;

function sortStack(stack) {
    let newStack = new Stack();

    while (!isEmpty(stack)) {
        let temp = stack.pop()
        // console.log(peek(newStack))
        while (!isEmpty(newStack) && (peek(newStack).data > temp)) {

            stack.push(newStack.pop())
        }
        newStack.push(temp);
    }
    console.log('string')
    console.log(display(newStack));
}


// Old 0,4,1,3
// New 
// T

function main() {
    let treky = new Stack;
    treky.push(0);
    treky.push(4);
    treky.push(1);
    treky.push(3);

    //treky.pop();
    // treky.pop();

    //treky.push(1);


    // console.log(display(treky));
    // console.log(isPalindrome('racecar'));
    // console.log(isPalindrome('A man, a plan, a canal: Panama'));
    // console.log(balanceParens('1 + 2 + (1 + 3)'));
    console.log(sortStack(treky));
}

main();


