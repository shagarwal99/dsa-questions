
var MyQueue = function() {
    this.input = new Array()
    this.output = new Array()
    this.peekEle = null
};


MyQueue.prototype.push = function(x) {
    if(this.input.length == 0){
        this.peekEle = x
    }
    this.input.push(x)
};


MyQueue.prototype.pop = function() {
    if(this.output.length == 0){
        while(this.input.length > 0){
            this.output.push(this.input.pop())
        }
    }

    return this.output.pop()
};


MyQueue.prototype.peek = function() {
    if(this.output.length == 0) return this.peekEle

    return this.output[this.output.length - 1]
};


MyQueue.prototype.empty = function() {
    return (this.input.length == 0 && this.output.length == 0)
};
