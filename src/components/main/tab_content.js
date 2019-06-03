import React from 'react';
import Cards from './card'
const TabContent = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '500px', backgroundColor: '#fff' }}>
            <div className="main_content">
                {props.data && props.data.map((v,index) => <Cards key={index} data={v} /> )}
            </div>
        </div>
    )
}
export default TabContent