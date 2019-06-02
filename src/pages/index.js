import React from 'react';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom'
// import './../assets/css/index.scss'
import './../assets/css/index.scss'
const index = () => {
    return(
        <div className="index_main">
            <h1>在便宜的时候买</h1>
            <Button><Link to='/login'>去登陆</Link></Button>
        </div>
    )
}
export default index