import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import sessionForm from './session_form'

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(sessionForm)