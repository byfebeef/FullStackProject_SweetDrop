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
                    <Link to={`/products/${this.props.product.id}`}><img className="product-item-image" src="./default_pic.png" alt="" /></Link>
                    <Link to={`/products/${this.props.product.id}`}>{this.props.product.name}</Link>
                    <div>price: ${this.props.product.price}</div>

                </div>
            </div>
        )
    }
}

export default ProductListItem;