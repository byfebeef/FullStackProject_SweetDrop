import React from 'react';
import { Link } from 'react-router-dom'

class ProductListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="product-item-wrap">
                <div className="product-item-container">
                    <img src="assets/default_pic.png" alt=""/>
                    <li><Link to={`/products/${this.props.product.id}`}>{this.props.product.name}</Link></li>
                    <li>price: {this.props.product.price}</li>

                </div>
            </div>
        )
    }
}

export default ProductListItem;