/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-12-18 13:00:17
 *@version: V1.0.5
 */

function iteratorCreator(arr) {
    var i = 0
    return {
        next() {
            var done = i >= arr.length
            var value = !done ? arr[i++] : undefined
            return {
                done,
                value,
            }
        },
    }
}

function* createIterator() {
    yield 1
    yield 2
    yield 3
}
