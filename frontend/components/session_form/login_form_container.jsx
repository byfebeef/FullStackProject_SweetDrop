import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import sessionForm from './session_form'

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(sessionForm);