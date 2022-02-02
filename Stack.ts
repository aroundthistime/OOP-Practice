class StackNode <T> {
    prev? : StackNode<T> | undefined
    constructor(readonly value : T){
    }
}

interface Stack <T> {
    size : number;
    push(value : T) : void;
    pop() : T | string;
    print() : void;
}

class StackImplementation <T> implements Stack<T> {
    private top : StackNode<T> | null = null;
    private _size : number = 0;
    constructor (){}
    get size() {
        return this._size;
    }
    push(value : T){
        const newNode : StackNode<T> = new StackNode(value);
        if (this.top){
            newNode.prev = this.top
            this.top = newNode
        } else {
            this.top = newNode;
        }
        this._size++;
    }
    pop() : T | never{
        if (this.top){
            const popValue = this.top.value;
            if (this.top.prev){
                this.top = this.top.prev;
            } else {
                this.top = null
            }
            this._size--;
            return popValue;
        } else {
            throw new Error ("Stack is Empty")
        }
    }
    print(){
        const values : T[] = [];
        if (this.top){
            let node : StackNode<T> | undefined = this.top;
            while (node){
                values.push(node.value);
                node = node.prev;
            }
            console.log(values.reverse().join(" -> "));
        } else {
            console.log("STACK IS EMPTY")
        }
    }
}

const numStack : Stack<number> = new StackImplementation();
numStack.push(1);
numStack.print();
numStack.push(2);
numStack.print();
numStack.push(3);
numStack.print();
numStack.pop();
numStack.print();
numStack.pop()
numStack.print();
numStack.pop();
numStack.print();

const strStack : Stack<string> = new StackImplementation();
strStack.push("하나");
strStack.print();
strStack.push("둘");
strStack.print();
strStack.push("셋");
strStack.push("!!");
strStack.print();
strStack.pop();
strStack.print();
strStack.pop()
strStack.print();
strStack.pop();
strStack.pop();
strStack.print();
