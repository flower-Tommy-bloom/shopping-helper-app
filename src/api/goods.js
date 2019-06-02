import {request} from './request'

export const findGoods = (params) => {
    return request({
        url:'searchgoods',
        params
    })
}

export const attentionGoods = (param) => {
    return request({
        url:'attention',
        method:'post',
        data:param
    })
}

export const shopping = (params) => {
    return request({
        url:'shopping',
        params
    })
}