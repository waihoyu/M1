function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const pivot = arr[0]
    var bigger = []
    var smaller = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= pivot) {
            bigger.push(arr[i])
        } else {
            smaller.push(arr[i])
        }
    }
    return quickSort(smaller).concat(pivot, quickSort(bigger))
}
var arr = [56, 3234, 24, 64, 3, 45, 12, 456, 88, 99, 32]
console.log(quickSort(arr))
