/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-12-17 16:43:30
 *@version: V1.0.5
 */

function curry(fn) {
    return function() {
        ars = arguments
        return function() {
            return fn(...ars, ...arguments)
        }
    }
}

function fun(a, b, c, d) {
    return a + b + c + d
}

fun = curry(fun)

var fn = fun(1,2);
console.log(fn(4,5))