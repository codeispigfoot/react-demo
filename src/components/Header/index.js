import React, { Component } from 'react';
import './style.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">我的订单</div>
         );
    }
}
 
export default Header;