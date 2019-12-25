let arr1 = [1, 2, 3, 4, 5, 7, 6, 8]
let arr2 = arr1.sort()
let arr3 = arr1.join('-')
let arr4 = arr1.splice(1, 2, 19, 19)
console.log(arr4)
console.log(arr1)

let arr9 = [1, 2, 3, 4, 5, 7, 6, 8]
// 求数组的各项值相加的和：
let result = arr9.reduce((total, item) => {
    // total为之前的计算结果，item为数组的各项值
    return total + item
}, 1)
console.log(result)
console.log(JSON.parse([1, 23]))
// join
//push pop
//shift unshift
//slice
//splice
//sort
//reverse
//indexof lastindxof
//map
//every
//some
//filter
//concat
//forEach
//isArray
//includes
//reduce
