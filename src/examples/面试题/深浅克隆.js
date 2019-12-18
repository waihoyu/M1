var arr = [1, 2, 3, 4, [66, 77, 88]]
function deepClone(o) {
    if (
        typeof o == 'string' ||
        typeof o == 'number' ||
        typeof o == 'boolean' ||
        typeof o == 'undefined'
    ) {
        return o
    } else if (Array.isArray(o)) {
        var _arr = []
        for (let i = 0; i < o.length; i++) {
            _arr.push(deepClone(o[i]))
        }
        return _arr
    } else if (typeof o == 'object') {
        var _o = {}
        for (var k in o) {
            _o[k] = deepClone(o[k])
        }
        return _o
    }
}
