import { connect } from 'react-redux';

import sessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'signup'
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    otherForm: () => dispatch(openModal('login')),
    demoForm: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP,mDTP)(sessionForm)

