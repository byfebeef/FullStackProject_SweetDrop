import { connect } from 'react-redux';
import ProductList from './product_list';
import { fetchProducts } from '../../actions/product_actions'

const mSTP = state => ({
    products: Object.keys(state.entities.products).map(id => state.entities.products[id])
})


const mDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct: productId => dispatch(fetchProduct(productId))
})

export default connect(mSTP, mDTP)(ProductList);