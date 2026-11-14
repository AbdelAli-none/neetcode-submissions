class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        const currentMin = this.minStack.length === 0 ? val: Math.min(val, this.minStack.at(-1));
        this.minStack.push(currentMin);
    }

    /**
     * @return {void}
     */
    pop() {
       this.stack.pop();
       this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
       return this.minStack.at(-1);
    }
}
