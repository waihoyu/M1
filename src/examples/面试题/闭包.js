//闭包是函数外部的事情，不是自己的事情
var a = 10
function fun() {
    console.log(a)
}
;(function(fn) {
    var a = 20
    fn()
})(fun)
