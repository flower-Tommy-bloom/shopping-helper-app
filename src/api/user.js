import {request} from './request'
export const login = (param) => {
    return request({
        url:'login',
        method:'post',
        data:param
    })
}




