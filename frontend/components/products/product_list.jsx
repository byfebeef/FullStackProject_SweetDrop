import React from 'react';
import ProductListItem from './product_list_item'

class ProductList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {

        const listItems = this.props.products.map( product => <ProductListItem key={product.id} product={product} />)

        return (
            <div className="product-listing-wrap">
                <div className="product-listing-menu-container">
                    <div className="product-listing-menu-title">Product Menu</div>
                    <div>Chocolate</div>
                    <div>Candy</div>
                </div>
                <div className="product-listing-container">
                    {listItems}
                </div>
            </div>
        )
    }
}

export default ProductList;
