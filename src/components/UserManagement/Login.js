import React, { Component } from 'react';
import PropTypes from "prop-types";
import { login } from '../../actions/securityActions';
import { connect } from 'react-redux';
import classnames from 'classnames';

class Login extends Component {

    constructor(){
        super();

        this.state = {
            username : "",
            password: "",
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value})
    };

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }

    componentDidUpdate() {
        if(this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (state.errors) {
             return { errors: props.errors }
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const userData = {
            username :this.state.username,
            password: this.state.password
        }
        this.props.login(userData);
    };

    render() {
        const {errors} = this.state;
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>

                            {errors.credentials && (
                                <div className="alert alert-danger text-center" role="alert">
                                    {errors.credentials}
                                </div>
                            )}

                            <form onSubmit={this.onSubmit}>
                                <div className="form-group my-3">
                                    <input 
                                        type="email" 
                                        className={classnames("form-control form-control-lg ", {
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
                                <div className="form-group my-3">
                                    <input 
                                        type="password" 
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.password
                                        })}
                                        placeholder="Password" 
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}  
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback">
                                            {errors.password}
                                        </div>
                                    )}
                                </div>
                                <div className="row">
                                    <div className="col"></div>
                                    <div className="d-grid gap-2 col-3 mx-auto">
                                        <input 
                                            type="submit" 
                                            className="btn btn-primary" 
                                            value="Log in"
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

Login.propTypes = {
    errors:PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
}

const mapStateToprops = state => ({
    security: state.security,
    errors: state.errors
});

export default connect(mapStateToprops, {login}) (Login);