import React from 'react';


export default class DrawerToggleButton extends React.Component {
    render(){
        return(

    <div>
    <button className="toggle-button" onClick={this.props.click}>
        <div className="toggle-button-line">text</div>
        <div className="toggle-button-line">text</div>
        <div className="toggle-button-line">text</div>
    </button>
    </div>
    
);
        }
    }

