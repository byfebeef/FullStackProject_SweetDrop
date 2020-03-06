import { connect } from 'react-redux';

import sessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'signup'
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    otherForm: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP,mDTP)(sessionForm)

