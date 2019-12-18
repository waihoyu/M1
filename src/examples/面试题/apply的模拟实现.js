Function.prototype.apply2 = function(context, arr) {
    var context = Object(context) || window
    context.fn = this
    var result
    if (!arr) {
        result = context.fn()
    } else {
        var args = []
        for (let i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']')
        }
        result = eval('context.fn(' + args + ')')
    }
    delete context.fn
    return result
}

Function.prototype.apply3 = function(context, arr) {
    var context = Object(context) || window
    console.log(this)
    context.fn = this
    var result
    if (!arr) {
        result = context.fn()
        console.log('没有arr')
    } else {
        var args = []
        for (let i = 0, len = args.length; i < len; i++) {
            args.push('arr[' + i + ']')
        }
        result = eval('context.fn(' + args + ')')
    }
    delete context.fn
    return result
}

Function.prototype.apply4 = function(context, arr) {
    var context = Object(context) || window
    context.fn = this
    var result
    if (!arr) {
        result = context.fn()
    } else {
        var args = []
        for (let i = 0, len = args.length; i < len; i++) {
            args.push('args[' + arr[i] + ']')
        }
        result = eval('context.fn(' + args + ')')
    }
    delete context.fn
    return result
}

Function.prototype.bind1 = function(context) {
    if (typeof this !== 'function') {
        throw new Error(
            'Function.prototype.bind - what is trying to be bound is not callable',
        )
    }
    var self = this
    var args = Array.prototype.slice.call(argument, 1)
    var fNOP = function() {}
    var fBound = function() {
        var bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(
            this instanceof fNOP ? this : context,
            args.concat(bindArgs),
        )
    }
    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()
    return fBound
}

Function.prototype.bind2 = function(context) {
    if (typeof this !== 'function') {
        throw Error(
            'Function.prototype.bind - what is trying to be bound is not callable',
        )
    }
    var selft = this
    var args = Array.prototype.slice.call(arguments, 1)
    var fBound = function() {
        var bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(
            this instanceof fNOP ? this : context,
            args.concat(bindArgs),
        )
    }
    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()
    return fBound
}

var obj = {
    name: 1,
}

function print() {
    console.log(this.name)
}

print.apply4(obj)
