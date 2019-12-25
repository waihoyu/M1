let cpuNum = require('os').cpus().length
console.log(cpuNum)

Function.prototype.apply3 = function(context, arr) {
    var context = Object(context) || window
    context.fn = this
    var result = null
    if (!arr) {
        result = context.fn()
    } else {
        var args = []
        for (let i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']')
        }
        result = eval('context.fn(' + args + ')')
    }
    return result
}

Function.prototype.bind2 = function(context) {
    var selft = this
    var args = Array.prototype.slice.call(arguments, 1)
    var fNOP = function() {}
    var fBound = function() {
        var args2 = Array.prototype.slice.call(arguments)
        return self.apply(
            this instanceof fNOP ? this : context,
            args.contact(args2),
        )
    }
    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()
    return fBound
}
