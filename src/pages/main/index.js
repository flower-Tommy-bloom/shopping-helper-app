import React from 'react';
import { Tabs, Badge, SearchBar, Accordion, List, Icon } from 'antd-mobile';
import { findGoods } from './../../api/goods'
import { TabContent } from './../../components/main'
import { isArray } from './../../util/tool'
import './../../assets/css/index.scss'
const tabs = [
    { type: 'goodsId', title: <Badge>搜索</Badge> },
    { type: 'isAttention', title: <Badge text={'今日(20)'}>收藏</Badge> },
    { type: 'spoor', title: <Badge dot>足迹</Badge> },
];
let dataList = {
    goodsId: [],
    isAttention: [],
    spoor: [],
    test:[]
}
let isLoadinged = {
    goodsId:true,
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
        findGoods({
            type: this.state.type,
            param: this.state.condition
        }).then(res => {
            let flag = isArray(res.data)
            if(flag){
                if(this.state.type === 'goodsId'){
                    dataList[this.state.type][0] = res.data[0]
                }else{
                    res.data.forEach(v => {
                        dataList[this.state.type].unshift(v)
                    })
                }
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
            type: 'goodsId',
            condition: val
        }, () => this.findGoods())
    }
    changeTab = (tab, index) => {
        if(!isLoadinged[tab.type]){
            isLoadinged[tab.type] = true
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
                    <SearchBar className="search" defaultValue="7629508" placeholder="7629508" maxLength={30} onSubmit={value => this.search(value)} />
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