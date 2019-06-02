import React, { Component } from 'react';

import { Modal, Slider } from 'antd-mobile';

import { attentionGoods } from './../../api/goods'
class AddGoods extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openModel: this.props.openModel,
            price: this.props.price,
            discountprice: this.props.price * 0.9,
            discount: 10
        }
    }
    state = {
        openModel: false,
        confirmLoading: false,
    };
    componentWillReceiveProps(newProps) {
        this.setState({
            id: newProps.id,
            openModel: newProps.openModel,
            price: newProps.price,
            discountprice: newProps.price * 0.9
        })
        console.log(newProps, 'Component WILL RECIEVE PROPS!')
    }
    discountprice = (val) => {
        const discountprice = this.state.price * val / 100
        this.setState({
            discountprice,
            discount: 100 - val
        })
    }
    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        attentionGoods({
            id: this.state.id,
            isAttention: true,
            attentionPrice: this.state.discountprice
        }).then(res => {
            this.setState({
                openModel: false,
                confirmLoading: false,
            });
            this.props.getBackInfo({ flag: true, openModel: false })
        })
    };

    handleCancel = () => {
        this.setState({
            openModel: false,
        });
        this.props.getBackInfo({ flag: false, openModel: false })
    };

    render() {
        const { openModel, confirmLoading } = this.state;
        return (
            <div>
                <Modal
                    title="Title"
                    visible={openModel}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <div>
                        <span>价格低于</span>
                        <span className="add_price">￥{this.state.discountprice}</span>
                        <span className="add_discount">{this.state.discount}%</span>
                        <span>通知您</span>
                    </div>
                    <Slider onChange={this.discountprice} defaultValue={90} />
                </Modal>
            </div>
        );
    }
}

export default AddGoods