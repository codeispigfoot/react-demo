import React, { Component } from 'react';
import './style.css'
class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stars: props.data.stars || 0,
            editing: false,
            comment: props.data.comment || '',
            ifCommented: props.data.ifCommented
         }
    }
    render() { 
        const {shop, product, price, picture} = this.props.data;
        return ( 
            <div className="orderItem"> 
                <div className="orderItem__picContainer">
                    <img className="orderItem__pic"  alt=""/>
                </div>
                <div className="orderItem__content">
                    <div className="orderItem__product">{product}</div>
                    <div className="orderItem__shop">{shop}</div>
                    <div className="orderItem__detail">
                        <div className="orderItem__price">{price}</div>
                        <div>
                            {
                                this.state.ifCommented ? (
                                    <button className="orderItem__btn orderItem__btn--grey">已评价</button>
                                ) : (
                                    <button className="orderItem__btn orderItem__btn--red" onClick={this.changeEdit.bind(this)}>评价</button>
                                )
                            }
                        </div>
                    </div>
                </div>
                {this.state.editing ? this.renderEditArea() : null}
            </div>
         );
    }
    changeEdit() {
        this.setState({
            editing: true,
        })
    }
    handleCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    handleClickStars = (stars) => {
        this.setState({
            stars: stars
        })
    }
    handleCancelComment = () => {
        this.setState({
            editing: false,
            comment: this.props.data.comment || "",
            stars: this.props.data.stars || 0,           
        })
    }
    handleSubmitComment = () => {
        const {comment, stars} = this.state;
        this.setState({
            editing: false,
            ifCommented: true
        })
        //模拟提交到服务器
        this.props.onSubmit(comment, stars)
    }
    renderEditArea() {
        return (
            <div className="orderItem__commentContainer">
                <textarea className="orderItem__comment" 
                onChange={this.handleCommentChange}
                value={this.state.comment}/>
                {this.renderStars()}
                <button className="orderItem__btn
                orderItem__btn--red" onClick={this.handleSubmitComment}>提交</button>
                <button className="orderItem__btn
                orderItem__btn--grey" onClick={this.handleCancelComment}>取消</button>
            </div>
        )
    }
    renderStars() {
        const {stars} = this.state;
        return (
            <div>
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        const light = stars >= item ?
                        "orderItem__star--light" : "";
                        return <span key={index} 
                        className={"orderItem__star" + light}
                        onClick={this.handleClickStars.bind(this, item)}>★</span>
                    })
                }
            </div>
        )
    }
}
 
export default OrderItem;