import React from 'react';

class ProductShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }

    render() {
        return(
            <div className="product-show-container">
                <h3>{this.props.product.name}</h3>
                <p>{this.props.product.description}</p>    
            </div>
        )
    }
}

export default ProductShow;