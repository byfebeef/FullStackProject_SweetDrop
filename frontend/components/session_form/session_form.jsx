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
        this.props.processForm(user);
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
        const displayErrors = (this.props.errors) ? this.renderErrors() : ''
        return(
            <div>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        {displayErrors}
                    </div>
                    <label>Email:
                        <input type="text" onChange={this.update('email')} value={this.state.email} />
                    </label>
                    <label>Password:
                        <input type="password" onChange={this.update('password')} value={this.state.password} />
                    </label>
                    <button type="submit">{this.props.formType}</button>    
                </form>
            </div>
        )
    }

}

export default sessionForm;