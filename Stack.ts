class StackNode {
    prev? : StackNode | undefined
    constructor(readonly value : number){
    }
}

interface Stack {
    size : number;
    push(value : number) : void;
    pop() : number | string;
    print() : void;
}

class StackImplementation implements Stack {
    private top : StackNode | null = null;
    private _size : number = 0;
    constructor (){}
    get size() {
        return this._size;
    }
    push(value : number){
        const newNode : StackNode = new StackNode(value);
        if (this.top){
            newNode.prev = this.top
            this.top = newNode
        } else {
            this.top = newNode;
        }
        this._size++;
    }
    pop() : number | never{
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
        const values : number[] = [];
        if (this.top){
            let node : StackNode | undefined = this.top;
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

const a : Stack = new StackImplementation();
a.push(1);
a.print();
a.push(2);
a.print();
a.push(3);
a.print();
a.pop();
a.print();
a.pop()
a.print();
a.pop();
a.print();