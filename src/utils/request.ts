import Axios from 'axios';
// import { message } from 'antd';

export const post = (url: string, params = {}) => {
    const options = Object.assign({}, { data: params }, { method: 'post', url });
    return request(url, options) as any;
}

export const get = (url: string, params = {}) => {
    const options = Object.assign({}, { params }, { method: 'get', url });
    return request(url, options) as any;
};

const requestConfig = {
    timeout: 1000 * 60,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
    baseURL: 'http://localhost:8080'
};

const request = (_url: string, options: any) => {
    const config = Object.assign({}, requestConfig, options);
    return new Promise((resolve, reject) => {
        Axios(config)
            .then((response) => {
                const { code, data, warning } = response.data;
                console.log(response)
                if (code === 200) {
                    console.log('inside 200')
                    resolve(response);
                }
                //  else {
                //     message.error(msg);
                // }
            })
            .catch((e) => {
                reject(e);
            });
    });
};