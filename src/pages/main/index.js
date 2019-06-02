import React, { Component } from 'react';
import { Tabs, Badge, SearchBar, Accordion, List, Icon } from 'antd-mobile';
import { search, attentionGoods } from './../../api/goods'
import { TabContent } from './../../components/main'
import { isArray } from './../../util/tool'
import './../../assets/css/index.scss'
const tabs = [
    { a:123,title: <Badge>搜索</Badge> },
    { a:1234,title: <Badge text={'今日(20)'}>收藏</Badge> },
    { a:12345,title: <Badge dot>足迹</Badge> },
];
class tabBar extends React.Component {
    constructor(porps) {
        super(porps)
        this.state = {
            list:[
                {a:1},
                {a:2},
                {a:3},
            ]
        }
    }
    Accordion = (key) => {
        console.log(key);
    }
    search = (val) => {
        search({ goodsId: val }).then(res => console.log(res, 111))
    }
    render() {
        return (
            <div>
                <div className="main_header">
                    <Accordion className="accordion" onChange={this.Accordion}>
                        <Accordion.Panel header="京东" className="searchlist">
                            <List>
                                <List.Item><Icon type="down" />淘宝</List.Item>
                                <List.Item><Icon type="check" />京东</List.Item>
                                <List.Item><Icon type="up" /></List.Item>
                            </List>
                        </Accordion.Panel>
                    </Accordion>
                    <SearchBar className="search" placeholder="Search" maxLength={8} onSubmit={value => this.search(value)} />
                </div>
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    {tabs.map((v,index) => <TabContent key={index} data={this.state.list[index]} />)}
                </Tabs>
            </div>
        )
    }
}
export default tabBar
// const Search = Input.Search;
// class Mainpage extends Component {
//     constructor() {
//         super()
//         this.state = {
//             id:7629508,
//             inputVal: 7629508,
//             isAttention:false,
//             openModel:false,
//             name: '',
//             price: 0,
//             img: '',
//         }
//     }
//     componentDidMount() {
//         this.checkGoodsa()
//     }

//     search = async (val) => {
//         this.setState({
//             inputVal: val,
//             id:val
//         }, () => {
//             this.checkGoodsa()
//         })
//     }

//     checkGoodsa = async () => {
//         const res = await getGoodsInfo({ goodsId: this.state.inputVal })
//         const flag = isArray(res.data)
//         let goodsDetail = flag ? res.data[0] : res.data
//         console.log(goodsDetail)
//         const { name, price, goodsImg, isAttention } = goodsDetail
//         this.setState({
//             name: name,
//             price: price,
//             goodsImg: goodsImg,
//             isAttention:isAttention || false
//         })
//     }

//     addGoods = async (val) => {
//         if(val){
//             this.setState({
//                 openModel:val,
//             })
//         }else{
//             attentionGoods({
//                 id:this.state.id,
//                 isAttention:false
//             })
//             this.setState({
//                 isAttention:val,
//             })
//         }
//     }

//     attentionStatus = (val) => {
//         console.log('son say',val)
//         this.setState({
//             isAttention:val.flag,
//             openModel:val.openModel
//         })
//     }

//     render() {
//         return (
//             <div className="main">
//                 <Row type='flex' justify="center" align="middle">
//                     <Col className="mb20" span={20}>
//                         <Search
//                             placeholder="input search text"
//                             onSearch={value => this.search(value)}
//                             defaultValue={this.state.inputVal}
//                             enterButton />
//                     </Col>
//                 </Row>
//                 <Row type='flex' justify="center" align="middle">
//                     <Col span={20}>
//                         <Card
//                             className="main_card"
//                         >
//                             <img className="main_goodsImg mb10" alt="example" src={this.state.goodsImg} />
//                             <span className="mr15">{this.state.name}</span>
//                             <span className="main_price mr10">￥{this.state.price}</span>
//                             <Switch checked={this.state.isAttention} defaultChecked onChange={val => this.addGoods(val)} />
//                         </Card>
//                     </Col>
//                 </Row>
//                 <AddGoods getBackInfo={this.attentionStatus} id={this.state.id} openModel={this.state.openModel} price={this.state.price}/>
//             </div>
//         )
//     }
// }
// export default Mainpage