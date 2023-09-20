type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        let new_node: Node<T> = { value: item, next: undefined };

        this.length += 1;
        if (this.tail === undefined) {
            this.head = this.tail = new_node;
            return;
        }

        this.tail.next = new_node;
        this.tail = new_node;
    }

    deque(): T | undefined {
        if (this.head === undefined) {
            return undefined;
        }

        this.length -= 1;

        let current_node: Node<T> = this.head;
        this.head = current_node.next;
        current_node.next = undefined;

        if(this.length === 0) {
            this.tail = undefined;
        }

        return current_node.value;
    }

    peek(): T | undefined {
        if (this.head === undefined) {
            return undefined;
        }

        return this.head.value;
    }
}
