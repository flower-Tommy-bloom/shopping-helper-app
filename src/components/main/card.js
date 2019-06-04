import React from 'react';
import { List, Switch } from 'antd-mobile';
import AddAttention from './addAttention'
import { attentionGoods } from '../../api/goods'
class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAttention: this.props.data.isAttention || false,
      attentionModel: false
    }
  }

  changeisAttention = (val) => {
    if (val) {
      this.setState({
        attentionModel: val
      })
    } else {
      attentionGoods({
        id: this.props.data.id,
        isAttention: val
      }).then(res => {
        this.setState({
          isAttention: false
        })
      })
    }
  }

  attentionBackInfo = (attentionInfo) => {
    this.setState({
      attentionModel: attentionInfo.attentionModel,
      isAttention: attentionInfo.isAttention
    })
  }

  render() {
    let { goodsId, name, goodsImg, price, attentionPrice } = this.props.data
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
        <AddAttention price={price} goodsId={goodsId} attentionPrice={attentionPrice} attentionModel={this.state.attentionModel} attentionBackInfo={this.attentionBackInfo} />
      </div>
    )
  }
}
export default Cards