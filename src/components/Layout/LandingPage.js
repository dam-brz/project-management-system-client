import React, { Component } from 'react'

class LandingPage extends Component {
    render() {
        return (
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Project Management Tool</h1>
                                <p className="lead">
                                    Create your account to join active projects or start your own
                                </p>
                                <hr />
                                <a href="register" className="btn btn-lg btn-primary mx-2">
                                    Sign Up
                                </a>
                                <a href="login" className="btn btn-lg btn-secondary mx-2">
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;
