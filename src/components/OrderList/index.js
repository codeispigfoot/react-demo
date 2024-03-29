import React, { Component } from 'react';
import OrderItem from '../OrderItem'

class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        fetch('/mock/orders.json').then(res => {
            if(res.ok) {
                console.log(1);
                res.json().then(data => {
                    console.log(data);
                    this.setState({
                        data: data
                    })
                })
            }
        })
    }
    render() { 
        return ( 
            <div> 
                {
                    this.state.data.map((item, index) => {
                        return <OrderItem key = {index} data={item}
                        onSubmit={this.handleSubmit} />
                    })
                }

            </div>
         );
    }
    handleSubmit = (id, comment, stars) => {
        const newData = this.state.data.map(item => {
            return item.id === id ?
            {
                ...item, comment, stars, ifCommented: true
            } : item;
        });
        this.setState({
            data: newData
        })
    }
}
 
export default OrderList;