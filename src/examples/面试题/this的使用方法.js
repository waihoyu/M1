function Foo() {
    function getName() {
        console.log(1)
    }
    return this
}
Foo.getName = function() {
    console.log(2)
}
Foo.prototype.getName = function() {
    console.log(3)
}
var getName = function() {
    console.log(4)
}

function getName() {
    console.log(5)
}

getName() //4  函数的声明先提前，不是5
Foo().getName()
new Foo().getName() //new 的运算级别非常高，原型链的查找
new Foo.getName() //普通函数，不是构造函数，
new new Foo().getName()

//-------
function getLength() {
    return this.length
}

function foo() {
    this.length = 1
    return (function() {
        var length = 2
        return {
            length: function(a, b, c) {
                return this.arr.length
            },
            arr: [1, 2, 3, 4],
            info: function() {
                return getLength.call(this.length)
            },
        }
    })()
}

var result = foo().info()
console.log(result)
//arguments.callee
//函数的长度length 是形参的个数

function fun() {
    var a = 1
    this.a = 2 //window

    function fn() {
        return this.a
    }
    fn.a = 3
    return fn
}
alert(fun()())

function fun() {}
console.log(typeof fun)

var a = 1
var obj = {
    a: 2,
    getA: function() {
        return this.a
    },
}
var getA = obj.getA
getA()
//----
var number = 2
var obj = {
    number: 4,
    fn1: (function() {
        this.number *= 2
        number = number * 2
        var number = 3
        return function() {
            this.number *= 2
            number *= 3
            alert(number)
        }
    })(),
}

alert(number) //4
var fn1 = obj.fn1
fn1() //
obj.fn1()
alert(window.number)
alert(obj.number)

//------

var number = 2
var obj = {
    number: 4,
    fn1: (function() {
        //var number = undefined
        this.number *= 2
        number = number * 2
        var number = 3
        console.log(this.number)
        console.log(number)
        return function() {
            this.number *= 2
            console.log(this)
            console.log(this.number)
            number *= 3
            console.log(number)
        }
    })(),
}

console.log(number) //4
var fn1 = obj.fn1
fn1() //9
obj.fn1() //27
console.log(window.number) //8
console.log(obj.number) //8
