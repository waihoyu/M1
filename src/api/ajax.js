import axios from 'axios'

/**
 *
 * @param {*} url
 * @param {*} params
 * @param {*} type
 */
axios.defaults.withCredentials = true
export default function ajax(url = '', params = {}, type = 'GET') {
    let promise
    return new Promise((resolve, reject) => {
        if ('GET' === type) {
            let paramStr = ''
            Object.keys(params).forEach(key => {
                paramStr += key + '=' + params[key] + '&'
                if (paramStr !== '') {
                    paramStr = paramStr.substr(0, paramStr.lastIndexOf('&'))
                }
            })
            url += '?' + paramStr
            promise = axios.get(
                url,
                {},
                {
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                    },
                    withCredentials: true,
                },
            )
        } else if ('POST' === type) {
            promise = axios.post(url, params)
        }
        promise
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}
