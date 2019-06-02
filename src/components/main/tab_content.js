import React from 'react';
import Cards from './card'
const TabContent = (props) => {
    // let divs
    // if(props.data && props.data.length > 0){
    //     divs = true
    // }else{
    //     divs = false
    // }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '500px', backgroundColor: '#fff' }}>
            <div className="main_content">
                {props.data && props.data.map((v,index) => <Cards key={index} data={v} /> )}
            </div>
        </div>
    )
}
export default TabContent