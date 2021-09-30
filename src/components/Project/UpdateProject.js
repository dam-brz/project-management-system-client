import React, { Component } from 'react'
import { getProject } from '../../actions/projectActions';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import classnames from "classnames";

class UpdateProject extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getProject(id, this.props.history)
    }

    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Edit Project</h5>
                            <hr />
                            <form>
                                <div className="form-group mb-2">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg " 
                                        placeholder="Project Name" 
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Unique Project ID"
                                        disabled 
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <textarea 
                                        className="form-control form-control-lg" 
                                        placeholder="Project Description">
                                    </textarea>
                                </div>
                                <div className="form-group my-4">
                                    <h6>Start Date</h6>
                                    <input 
                                        type="date" 
                                        className="form-control form-control-lg" 
                                        name="start_date" 
                                    />
                                </div>
                                <div className="form-group my-4">
                                    <h6>Estimated End Date</h6>
                                    <input 
                                        type="date" 
                                        className="form-control form-control-lg" 
                                        name="end_date" 
                                    />
                                </div>
                                <input 
                                    type="submit" 
                                    className="btn btn-primary btn-block mt-4" 
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

UpdateProject.protoTypes = {
    getProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
};

const mapStateToprops = state => ({
    project: state.project.project
});

export default connect(mapStateToprops, {getProject}) (UpdateProject)