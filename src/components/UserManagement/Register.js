import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <form action="create-profile.html">
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg my-2" placeholder="Name" name="name"
                                        required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg my-2" placeholder="Email Address" name="email" />

                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg my-2" placeholder="Password" name="password" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg my-2" placeholder="Confirm Password"
                                        name="password2" />
                                </div>
                                <div className="row">
                                    <div className="col"></div>
                                    <div className="d-grid gap-3 col-3 mx-auto">
                                        <input type="submit" className="btn btn-primary" value="Register"/>
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

export default Register;