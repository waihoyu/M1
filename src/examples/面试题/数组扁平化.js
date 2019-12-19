var arr = [0, [1, 2, 3], [4, [1, [2, 3, [9, 0]]]]]
function flattenArray(arr) {
    var _arr = []
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            _arr.push(arr[i])
        } else {
            _arr = _arr.concat(flattenArray(arr[i]))
        }
    }
    return _arr
}

// console.log(flattenArray(arr))

function flattenArray2(arr) {
    console.log(arr)
    var result = []
    while (
        arr.some(item => {
            console.log(item)
            return Array.isArray(item)
        })
    ) {
        arr = [].concat(...arr)
        console.log(arr)
    }
    return arr
}

// console.log(flattenArray2(arr))

arr.toString()
    .split(',')
    .forEach(item => console.log(item))
