import { connect } from 'react-redux';

import sessionForm from './session_form';
import { signup } from '../../actions/session_actions';


const mSTP = (state) => ({
    errors: state.errors.sessionErrors,
    formType: 'signup'
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mSTP,mDTP)(sessionForm)

