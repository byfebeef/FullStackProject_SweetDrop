import { connect } from 'react-redux';
import React from 'react';
import Splash from './splash';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})


const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(Splash);