
/*
    The main challenge with this problem is that since data is coming from a stream ,we cant have the conventional pge approach here.
    So, idea here is to push the stock price and its span in the stack. So, if the price at the top of the stack is smaller than the current price
    we can just add that span to the stock span and then push the latest price with the span
*/

var StockSpanner = function() {
    this.st = new Array()
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1
    while( this.st.length > 0 && this.st[this.st.length - 1][0] <= price ){
        span += this.st[this.st.length - 1][1]
        this.st.pop()
    }

    this.st.push([price, span])
    return span
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */