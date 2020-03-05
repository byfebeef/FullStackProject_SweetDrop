import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBar)