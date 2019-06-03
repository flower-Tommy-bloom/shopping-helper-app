import React from 'react';
import { List, Switch } from 'antd-mobile';
import { attentionGoods } from './../../api/goods'
import AddAttention from './addAttention'
const card = (props) => {
  let { id, name, goodsImg, isAttention, price, attentionPrice } = props.data
  const changeisAttention = (val) => {
    console.log(val);
    // isAttention = !val
    // attentionGoods(id)
  }
  return (
    <div className="cards">
      <div className="cardsImg">
        <img src={goodsImg} alt={name} />
      </div>
      <div className="cardsInfo">
        <p>{name}</p>
        <div>
          <span>￥{price}</span>
          <List.Item
            extra={<Switch
              checked={isAttention}
              onChange={(val) => changeisAttention(val)}
            />}
          ></List.Item>
        </div>
      </div>
    </div>
  )
}
class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAttention: this.props.data.isAttention,
      attentionModel:false
    }
  }
  changeisAttention = (val) => {
    if (val) {
      this.setState({
        attentionModel:val
      })
    }
  }
  attentionBackInfo = (attentionInfo) => {
    this.setState({
      attentionModel:attentionInfo.attentionModel,
      isAttention:attentionInfo.isAttention
    })
  }

  render() {
    let { id, name, goodsImg, price, attentionPrice } = this.props.data
    return (
      <div className="cards">
        <div className="cardsImg">
          <img src={goodsImg} alt={name} />
        </div>
        <div className="cardsInfo">
          <p>{name}</p>
          <div>
            <span>￥{price}</span>
            <List.Item
              extra={<Switch
                checked={this.state.isAttention}
                onChange={(val) => this.changeisAttention(val)}
              />}
            ></List.Item>
          </div>
        </div>
        <AddAttention attentionModel={this.state.attentionModel} attentionBackInfo={this.attentionBackInfo}  />
      </div>
    )
  }
}
export default Cards