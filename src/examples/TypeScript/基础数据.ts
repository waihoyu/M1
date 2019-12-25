console.log('123')
let weight: boolean = true
console.log(weight)

function log(msg) {
    console.log(msg)
}

log(1)

//1.类型注解
interface Person {
    name: string
    sex: string
    age: number
}
class Person {
    constructor(name) {
        this.name = name
    }
}
function logPerson(person: Person) {
    console.log(person.name)
}

//3.类别
class Dog {
    dogName: string
    dogAge: number
    dogSex: string

    constructor(dogName: string, dogAge: number, dogSex: string) {
        this.dogName = dogName
        this.dogAge = dogAge
        this.dogSex = dogSex
    }
    eat(food: string) {
        console.log(this.dogName + '在吃' + food)
    }
}

let wc = new Dog('旺财', 12, '狗粮')
console.log(wc)
wc.eat('狗粮')

let num1: number = 16
let num2: number = 0x10
let num3: number = 0o20
let num4: number = 0b10000

console.log(num1, num2, num3, num4)

//数组；

let numArr: number[] = [1, 2, 3, 4]
console.log(numArr)

//元组
let tuple: [string, number, boolean, string]
tuple = ['上海', 200, true, '北京']
console.log(tuple)
console.log(tuple)

//枚举

enum Sex {
    Man,
    Woman,
}
enum Color {
    red,
    blue,
    black,
}
//any
let str: any
str = '中国'
str = 100
str = true

let arr: any[] = ['', true, 19]

//void

let str4: void = null
let str5: void = undefined

console.log(str4, str5)

function logmsg(): void {
    console.log('log-msg')
}

//null undefined
let str9: null = null
let str10: undefined = undefined
let str11: null = undefined

//never
//必须存在无法到达的终点

//抛出异常的函数

function error(msg: string): never {
    throw new Error(msg)
    while (true) {}
}

error('发生未知错误')

//object
