import React from 'react';
import {  Icon } from 'antd-mobile';
const card = (props) => {
    const {name,goodsImg,isAttention,price,attentionPrice} = props.data
    return(
        <div className="cards">
            <div className="cardsImg">
                <img src={goodsImg} alt={name}/>
            </div>
            <div className="cardsInfo">
                <p>{name}</p>
                <div>
                    <span>￥{price}</span>
                    <Icon type="check" />
                </div>
            </div>
        </div>
    )
}
export default card