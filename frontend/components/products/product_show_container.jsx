import ProductShow from './product_show';
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions'

const mSTP = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId]
})

const mDTP = dispatch => ({
    fetchProduct: productId => dispatch(fetchProduct(productId))
})

export default connect(mSTP, mDTP)(ProductShow)