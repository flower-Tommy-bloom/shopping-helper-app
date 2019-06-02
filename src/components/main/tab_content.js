import React from 'react';
const TabContent = (props) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '500px', backgroundColor: '#fff' }}>
            <div className="main_content">
                {props.data.a}
            </div>
        </div>
    )
}
export default TabContent