import React, { Component } from 'react';
import PropTypes from "prop-types";
import { createNewUser } from '../../actions/securityActions';
import { connect } from 'react-redux';
import classnames from 'classnames';

class Register extends Component {

    constructor(){
        super();

        this.state = {
            username : "",
            fullName: "",
            password: "",
            confirmPassword: "",
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value})
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            username :this.state.username,
            fullName: this.state.fullName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        this.props.createNewUser(newUser, this.props.history)
    };

    render() {
        const {errors} = this.state;
        let passwordErrors;
        let confirmPasswordErrors;

        if (errors.password) {
            passwordErrors  = errors.password.toString().split(',');
            confirmPasswordErrors  = errors.password.toString().split(',');
        } else {
            passwordErrors = [];
            confirmPasswordErrors = [];
        }

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg my-2", {
                                            "is-invalid": errors.fullName
                                        })}
                                        placeholder="Full name" 
                                        name="fullName"
                                        value={this.state.fullName}
                                        onChange={this.onChange}
                                    />
                                    {errors.fullName && (
                                        <div className="invalid-feedback">
                                            {errors.fullName}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        className={classnames("form-control form-control-lg my-2", {
                                            "is-invalid": errors.username
                                        })}
                                        placeholder="Email Address" 
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChange} 
                                    />
                                    {errors.username && (
                                        <div className="invalid-feedback">
                                            {errors.username}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className={classnames("form-control form-control-lg my-2", {
                                            "is-invalid": errors.password
                                        })}
                                        placeholder="Password" 
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                    {errors.password && passwordErrors.map((pwe) =>  
                                        <div className="invalid-feedback">
                                            {pwe}
                                        </div>
                                    )}       
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className={classnames("form-control form-control-lg my-2", {
                                            "is-invalid": errors.confirmPassword
                                        })} 
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={this.state.confirmPassword}
                                        onChange={this.onChange} 
                                    />
                                    {errors.confirmPassword && confirmPasswordErrors.map((cpwe) =>  
                                        <div className="invalid-feedback">
                                            {cpwe}
                                        </div>
                                    )}
                                </div>
                                <div className="row">
                                    <div className="col"></div>
                                    <div className="d-grid gap-3 col-3 mx-auto">
                                        <input 
                                            type="submit" 
                                            className="btn btn-primary" 
                                            value="Register"
                                        />
                                    </div>
                                    <div className="col"></div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    errors:PropTypes.object.isRequired,
    createNewUser: PropTypes.func.isRequired,
    security:PropTypes.object.isRequired
}

const mapStateToprops = state => ({
    errors: state.errors,
    security: state.security
});

export default connect(mapStateToprops, {createNewUser}) (Register);