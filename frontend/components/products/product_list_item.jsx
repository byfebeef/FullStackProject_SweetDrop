import React from 'react';
import { Link } from 'react-router-dom'

class ProductListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <ul>
                    
                    <li><Link to={`/products/${this.props.product.id}`}>{this.props.product.name}</Link></li>
                    <li>price: {this.props.product.price}</li>
                    <li>description: {this.props.product.description}</li>

                </ul>
            </div>
        )
    }
}

export default ProductListItem;