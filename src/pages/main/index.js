import React from 'react';
import { Tabs, Badge, SearchBar, Accordion, List, Icon } from 'antd-mobile';
import { findGoods } from './../../api/goods'
import { TabContent } from './../../components/main'
import { isArray } from './../../util/tool'
import './../../assets/css/index.scss'
const tabs = [
    { type: 'id', title: <Badge>搜索</Badge> },
    { type: 'isAttention', title: <Badge text={'今日(20)'}>收藏</Badge> },
    { type: 'spoor', title: <Badge dot>足迹</Badge> },
];
let dataList = {
    id: [],
    isAttention: [],
    spoor: []
}
let idLoading = {
    id:true,
    isAttention:false,
    spoor:false
}
class tabBar extends React.Component {
    constructor(porps) {
        super(porps)
        this.state = {
            type: '',
            condition: '',
            
        }
    }
    findGoods = () => {
        console.log(this.state,22)
        findGoods({
            type: this.state.type,
            param: this.state.condition
        }).then(res => {
            let flag = isArray(res.data)
            if(flag){
                res.data.map(v => {
                    dataList[this.state.type].unshift(v)
                    console.log(dataList[this.state.type],2)
                })
            }else{
                dataList[this.state.type].unshift(res.data)
            }
        })
    }
    Accordion = (key) => {
        console.log(key);
    }
    search = (val) => {
        this.setState({
            type: 'id',
            condition: val
        }, () => this.findGoods())
    }
    changeTab = (tab, index) => {
        console.log(tab,1)
        if(!idLoading[tab.type]){
            idLoading[tab.type] = true
            this.setState({
                type: tab.type
            }, () => {
                this.findGoods()
            })
        }
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
                    <SearchBar className="search" defaultValue="7629508" placeholder="7629508" maxLength={8} onSubmit={value => this.search(value)} />
                </div>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { this.changeTab(tab, index) }}
                >
                    {tabs.map((v, index) => <TabContent key={index} data={dataList[v.type]} />)}
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