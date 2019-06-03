import React from 'react';
import { Modal, List, Button, InputItem, Switch } from 'antd-mobile';
import { attentionGoods } from '../../api/goods'

class AddAttention extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            attentionModel: false,
            buyOnly:true,
            attentionrice:0
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
            id: this.props.id,
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
                            defaultValue={this.props.price * 0.9}
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
// class AddGoods extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             openModel: this.props.openModel,
//             price: this.props.price,
//             discountprice: this.props.price * 0.9,
//             discount: 10
//         }
//     }
//     state = {
//         openModel: false,
//         confirmLoading: false,
//     };
//     componentWillReceiveProps(newProps) {
//         this.setState({
//             id: newProps.id,
//             openModel: newProps.openModel,
//             price: newProps.price,
//             discountprice: newProps.price * 0.9
//         })
//         console.log(newProps, 'Component WILL RECIEVE PROPS!')
//     }
//     discountprice = (val) => {
//         const discountprice = this.state.price * val / 100
//         this.setState({
//             discountprice,
//             discount: 100 - val
//         })
//     }
//     handleOk = () => {
//         this.setState({
//             confirmLoading: true,
//         });
//         attentionGoods({
//             id: this.state.id,
//             isAttention: true,
//             attentionPrice: this.state.discountprice
//         }).then(res => {
//             this.setState({
//                 openModel: false,
//                 confirmLoading: false,
//             });
//             this.props.getBackInfo({ flag: true, openModel: false })
//         })
//     };

//     handleCancel = () => {
//         this.setState({
//             openModel: false,
//         });
//         this.props.getBackInfo({ flag: false, openModel: false })
//     };

//     render() {
//         const { openModel, confirmLoading } = this.state;
//         return (
//             <div>
//                 <Modal
//                     title="Title"
//                     visible={openModel}
//                     onOk={this.handleOk}
//                     confirmLoading={confirmLoading}
//                     onCancel={this.handleCancel}
//                 >
//                     <div>
//                         <span>价格低于</span>
//                         <span className="add_price">￥{this.state.discountprice}</span>
//                         <span className="add_discount">{this.state.discount}%</span>
//                         <span>通知您</span>
//                     </div>
//                     <Slider onChange={this.discountprice} defaultValue={90} />
//                 </Modal>
//             </div>
//         );
//     }
// }
