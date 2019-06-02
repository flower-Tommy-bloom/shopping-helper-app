
import { Toast } from 'antd-mobile';
import axios from 'axios'
const baseUrl = 'http://127.0.0.1:3001/api/'
// 请求封装
/**
 *  @params get请求用这个传参
 *  @data post请求用这个传参
 * 
 *  */
export const request = (param) => {
    const {url,method = 'get',data = null,params = null} = param
    return axios({
            url:baseUrl+url,
            method,
            data,
            params
        }).then(res => {
            res.data.success ? Toast.success(res.data.msg, 1) : Toast.fail(res.data.msg, 1)
            return res.data
        })

        
}