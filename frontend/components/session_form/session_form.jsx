import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class sessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        .then(this.props.closeModal);
    }
    handleDemo(e) {
        e.preventDefault();
        let user = { email: "Guest_User@guest.com", password: "password" }
        this.props.demoForm(user)
        .then(this.props.closeModal);
    }

    renderEmailErrors() {
        let errorOutput = ''
        let link;
        this.props.errors.forEach((error) => {

            if ((error !== 'Email has already been taken') && (error !== 'Invalid email/password combination.' && error !== 'Password is too short (minimum is 6 characters)')) {
                errorOutput += error
            } else if (error === 'Email has already been taken') {
                errorOutput = `User already exists. Did you mean to`
                link = <input className="form-error-link" type="submit" value="log in?" onClick={() => this.props.otherForm()} />

            }
        })
        return (
            <div>
                {errorOutput} {link}
            </div>
        );
    }

    renderPasswordErrors() {
        let errorOutput = ''
        this.props.errors.forEach((error) => {
            if (error === 'Invalid email/password combination.' || error === 'Password is too short (minimum is 6 characters)') {
                errorOutput += error
            } 
        })
        return (
            <div>
                {errorOutput}
            </div>
        );
    }


  


    render() {
        const formHeader = (this.props.formType === 'login') ? 
                'Log In To SweetDrop' : 'Sign Up For SweetDrop!' ;
        const subButton = (this.props.formType === 'login') ? 
                'LOG IN' : 'CONTINUE'
        
        const footerText = (this.props.formType === 'login') ? 
        <div className="form-footer-text">
            Not a member yet? 
            <input className="form-footer-link" type="submit" value="Sign Up" onClick={() => this.props.otherForm()} />
        </div> :
        <div className="form-footer-text">
            Already a member? 
            <input className="form-footer-link" type="submit" value="Log In" onClick={() => this.props.otherForm()} />
        </div>

        const displayEmailErrors = (this.props.errors) ? this.renderEmailErrors() : ''

        const displayPasswordErrors = (this.props.errors) ? this.renderPasswordErrors() : ''
        return(
            <div className="session-form">
                <div className="session-header-container">
                    <h3 className="session-header">{formHeader}</h3>
                    <FontAwesomeIcon className="icon-faTimes" icon={faTimes} onClick={() => this.props.closeModal()} />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-body-container">
                        <div className="form-guest-container">
                            <input className="form-guest-text" type="submit" onClick={this.handleDemo} value="Continue with Guest User" />
                        </div>
                        <div className="or-container"><span>OR</span></div>
                        <div className="form-label-container">
                            <label className="form-input-label">Email</label>
                        </div>
                        <div className="form-input-container">
                        <input className="form-input-field" placeholder="Email" type="text" onChange={this.update('email')} value={this.state.email} />
                        <div className="form-error">
                            {displayEmailErrors}
                        </div>
                        </div>

                    <div className="form-label-container">
                        <label className="form-input-label">Password</label>  
                    </div>
                    <div className="form-input-container">
                        <input className="form-input-field" type="password" placeholder="Password" onChange={this.update('password')} value={this.state.password} />
                        <div className="form-error">
                            {displayPasswordErrors}
                        </div>
                    </div>

                    <button className="form-button" type="submit">{subButton}</button>    
                    <div className="form-footer-container">
                        {footerText}
                    </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default sessionForm;