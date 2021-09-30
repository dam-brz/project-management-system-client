import React, { Component } from 'react'
import { getProject, updateProject } from '../../actions/projectActions';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import classnames from "classnames";

class UpdateProject extends Component {

    constructor() {
        super();

        this.state = {
            "projectName": "",
            "projectIdentifier": "",
            "description": "",
            "startDate": "",
            "endDate": ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { projectName , projectIdentifier , description , startDate , endDate } = nextProps.project;
        this.setState({ projectName , projectIdentifier , description , startDate , endDate });
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getProject(id, this.props.history)
    };

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value})    
    }

    onSubmit(e) {
        e.preventDefault();
        const project = {
            "projectName": this.state.projectName,
            "projectIdentifier": this.state.projectIdentifier,
            "description": this.state.description,
            "startDate": this.state.startDate,
            "endDate": this.state.endDate
        }
        this.props.updateProject(project.projectIdentifier, project, this.props.history)
    };

    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Edit Project</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group mb-2">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg " 
                                        placeholder="Project Name" 
                                        name="projectName"
                                        value={this.state.projectName}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Unique Project ID"
                                        name="projectIdentifier"
                                        value={this.state.projectIdentifier}
                                        onChange={this.onChange}
                                        disabled 
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <textarea 
                                        className="form-control form-control-lg" 
                                        placeholder="Project Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    >
                                    </textarea>
                                </div>
                                <div className="form-group my-4">
                                    <h6>Start Date</h6>
                                    <input 
                                        type="date" 
                                        className="form-control form-control-lg" 
                                        name="startDate" 
                                        value={this.state.startDate}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group my-4">
                                    <h6>Estimated End Date</h6>
                                    <input 
                                        type="date" 
                                        className="form-control form-control-lg" 
                                        name="endDate"
                                        value={this.state.endDate}
                                        onChange={this.onChange} 
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
    updateProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
};

const mapStateToprops = state => ({
    project: state.project.project
});

export default connect(mapStateToprops, {getProject, updateProject}) (UpdateProject)