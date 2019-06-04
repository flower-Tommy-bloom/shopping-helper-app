import React from 'react';
import { Modal, List, Button, InputItem, Switch } from 'antd-mobile';
import { attentionGoods } from '../../api/goods'

class AddAttention extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            attentionModel: false,
            buyOnly:true,
            attentionPrice:Math.floor(this.props.price * 0.9)
        }
        console.log('AddAttention',props)
    }
    onClose = () => () => {
        this.props.attentionBackInfo({
            attentionModel: false
        })
    }
    onSubmit = () => () => {
        attentionGoods({
            goodsId: this.props.goodsId,
            isAttention: true,
            attentionPrice: this.state.attentionPrice,
            buyOnly:this.state.buyOnly
        }).then(res => {
            this.props.attentionBackInfo({
                attentionModel: false,
                isAttention: true
            })
        }).catch(err => {
            this.props.attentionBackInfo({
                attentionModel: false
            })
        })
    }
    nowAttentionPrice = (val) => {
        this.setState({
            attentionPrice: val
        })
    }
    buyOnly = (val) => {
        this.setState({
            buyOnly: val
        })
    }
    render() {
        return (
            <Modal
                popup
                visible={this.props.attentionModel}
                animationType="slide-up"
                maskClosable
                onClose={this.onClose()}
            >
                <List renderHeader={() => <div>关注信息</div>} className="popup-list">
                    <List.Item>
                        <InputItem
                            placeholder="0.00"
                            // extra={this.state.attentionPrice / this.props.price}
                            defaultValue={Math.floor(this.props.price * 0.93)}
                            value={this.state.attentionPrice}
                            onChange={this.nowAttentionPrice}
                        >价格 ¥</InputItem>
                    </List.Item>
                    <List.Item
                        extra={<Switch
                            checked={this.state.buyOnly}
                            onChange={this.buyOnly}
                            platform="android"
                        />}
                    >只买一个
                    </List.Item>
                    <List.Item>
                        <Button type="primary" onClick={this.onSubmit()}>关注</Button>
                    </List.Item>
                </List>
            </Modal>
        )
    }
}
export default AddAttention
