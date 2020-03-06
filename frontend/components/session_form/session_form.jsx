import React from 'react';

class sessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        console.log(this.props.closeModal)
        this.props.processForm(user)
        .then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const formHeader = (this.props.formType == 'login') ? 
                'Log In To SweetDrop' : 'Sign Up For SweetDrop!' ;
        const subButton = (this.props.formType === 'login') ? 
                'LOG IN' : 'CONTINUE'

        const displayErrors = (this.props.errors) ? this.renderErrors() : ''
        return(
            <div className="session-form">
                <h3 className="session-header">{formHeader}</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        {displayErrors}
                    </div>
                        <div className="form-label-container">
                            <label className="form-input-label">Email</label>
                        </div>
                        <div className="form-input-container">
                            <input className="form-input-field" placeholder="Email" type="text" onChange={this.update('email')} value={this.state.email} />

                        </div>

                    <div className="form-label-container">
                        <label className="form-input-label">Password</label>  
                    </div>
                    <div className="form-input-container">
                        <input className="form-input-field" type="password" placeholder="Password" onChange={this.update('password')} value={this.state.password} />
                    </div>

                    <button className="form-button" type="submit">{subButton}</button>    
                </form>
            </div>
        )
    }

}

export default sessionForm;