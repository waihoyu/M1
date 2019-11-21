import axios from 'axios';

export default function ajax(url = '', params = {}, type = 'GET') {
    let promise;
    return new Promise((resolve, reject) => {
        if ('GET' === type) {
            let paramStr = '';
            Object.keys(params).forEach(key => {
                paramStr += key + '=' + params[key] + '&';
                if (paramStr !== '') {
                    paramStr = paramStr.substr(0, paramStr.lastIndexOf('&'));
                }
            });
            url += '?' + paramStr;
            promise = axios.get(url);
        } else if ('POST' === type) {
            promise = axios.post(url, params);
        }
        promise
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
