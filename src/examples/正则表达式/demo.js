/* eslint no-console: 'off' */
let sayHi = () => {
    console.log('sayHi', 0)
}

sayHi()

//正则表达式
//regular
//只能处理字符串
//它是一个规则，可以验证字符串是否符合某个规则，也可以把字符串符合规则的内容普捕获到
let str = 'good good study, day day up'
//学正则就是用来制定规则
let reg = new RegExp()
let reg1 = /\d+/
str = '2019-08-12'
//[ '2019', index: 0, input: '2019-08-12', groups: undefined ]
console.log(reg1.exec(str))

var1 = 1
console.log(var1)
var4 = 4
console.log(typeof var4)

// 编写正则表达式
// 创建方式有两种
//字面量方式（两个斜杠之间包起来，都是用来描述规则的元字符）
let reg2 = /\d+/
console.log(reg2.exec(str))
//
let reg3 = new RegExp('\\d+')

// 正则表达式由两部分组成
// 元字符
// 修饰符

//常用的元字符
//1、量词元字符：设置出现的次数
// *   0到多次
// +  1到多次
// ？ 零次或者一次
// {n}  出现n次
// {n,}  出现n到多次
// {n,m} 出现n到m次

//2、特殊元字符：单个或者组合在一起代表特殊到含义
//  \  转义字符
//  .   除\n （换行符）以外的任意字符
//  ^   以哪一个元字符作为开始
//  $  以哪个元字符作为结束
//  \n  换行符
//   \d   0到9 之间到一个数字
//   \D  非0到9之间到一个数字（大写和小写的意思是相反的）
//   \w 数字、字母 下划线中的任意一个字符
//  \m  一个空白字符
//  \s  一个空白字符（包括 空格、制表符、换页符等）
//  \t  一个制表符 （一个TAB键  四个空格）
//  \b  匹配一个单词的边界
// x｜y  x或者y中的一个字符
// [xyz]  x或者y或者z中的一个字符
let xyz = /[xyzd]/
//[^xy]  除去x/y以外的任意字符
//[a-z]  指定a-z这个范围中的任意字符   [0-9a-zA-Z_]
let reg10 = /[0-9]{5}/
//[^a-z]  上一个的取反 “非”
//（）  正则中的分组符合
//（？：）  只匹配不捕获
//（？=）  正向预查
//（？！）  负向预查
//
//3.普通元字符，代表本身含义的
let ll = /testest/

//  正则表达式常用的修饰符  img
// i  ignoreCase  忽略大小写
//  g =>  global  全局匹配
//  m => multiline 可以进行多行匹配
let result = /A/.test('lala') //
let result2 = /A/i.test('lalala') //

//元字符详细解析

//  ^ $
let reg44 = /^\d{4}/gm

let reg55 = /\d/gm

//^ $ 两个都不加，字符串中包含符合规则的内容即可
let reg56 = /\d+/gm
//^ $ 两个都加： 字符串只能是和规则一致的内容
let reg57 = /^\d+$/gm

let reg58 = /\d/gm
//举个例子 ：验证手机号码（11位数，第一个数字是1即可）
let reg59 = /^1\d{10}$/gm

let reg60 = /^2.3$/gm
// 基于转义字符  让其只能代表小数点

let reg61 = /^2\.3$/

let str21 = 'd'
let reg62 = /^\d$/

console.log(reg62.test(str21))
