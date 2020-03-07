import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import DropDown from './drop_down'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    modal: state.ui.modal

})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(DropDown)