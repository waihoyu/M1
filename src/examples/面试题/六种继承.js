function Parent() {
    ;(this.name = 'parent'), (this.hobbies = ['baskball', 'football'])
}
function Son() {
    Parent.call(this)
}
Son.prototype = new Parent()
Son.prototype.constructor = Son

console.log(new Son().name)

//继承的实现
function Parent2() {
    this.name = 'parent2'
    this.hobbies = []
}
function Son2(age) {
    this.age = age
    Parent.call(this)
}

Son2.prototype = new Parent2()
Son2.prototype.constructor = Son2
