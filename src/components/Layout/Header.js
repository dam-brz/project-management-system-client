import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logout } from '../../actions/securityActions';

class Header extends Component {

    logout() {
        this.props.logout();
        window.location.href = "/";
      }

    render() {
        const {validToken, user}  = this.props.security;

        const userIsAuth = (
            <div className="collapse navbar-collapse d-flex justify-content-end" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link">
                            Log in as: {user.username}
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/logout" className="nav-link" onClick={this.logout.bind(this)}>
                            Log out
                        </Link>
                    </li>
                </ul>
            </div>
        );

        const userIsNotAuth = (
            <div className="collapse navbar-collapse d-flex justify-content-end" id="mobile-nav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Log In
                        </Link>
                    </li>
                </ul>
            </div>
        );

        let headerLinks;

        if (validToken && user) {
            headerLinks = userIsAuth;
        } else {
            headerLinks = userIsNotAuth;
        }

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Project Management System
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>

                    {headerLinks}
                    
                </div>
            </nav>
        )
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps, {logout}) (Header);