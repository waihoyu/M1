// function fun() {
//     // this.name = 'fun'
//     //这个地方去掉this.name 和不去掉this.name 是有区别的
//     return () => console.log(this)
// }
// var laowang = { name: 'laowang' }
// var f = fun.call(laowang)
// f()

function reverseInt(arg) {
    if (arguments.length === 1 && typeof arg === 'number') {
        var arg1 = arg % 10
        var arg2 = parseInt(arg / 10)
        if (arg2 == 0) {
            return arg1
        } else {
            return `${arg1}${reverseInt(arg2)}`
        }
    } else {
        console.log('实际参数个数不合法')
    }
}
console.log(reverseInt(987))
console.log(typeof reverseInt(987))
