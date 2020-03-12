import { connect } from 'react-redux';
import ProductList from './product_list'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})


const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(ProductList);