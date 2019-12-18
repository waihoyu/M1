function fun() {
    // this.name = 'fun'
    //这个地方去掉this.name 和不去掉this.name 是有区别的
    return () => console.log(this)
}
var laowang = { name: 'laowang' }
var f = fun.call(laowang)
f()
