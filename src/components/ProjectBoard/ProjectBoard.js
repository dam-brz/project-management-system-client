import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Backlog from './Backlog';
import PropTypes from "prop-types";
import { getProjectBacklog } from '../../actions/backlogActions';

class ProjectBoard extends Component {

    constructor() {
        super();

        this.state = {
            "errors": {}
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (state.errors) {
             return { errors: props.errors }
        }
    }

    componentDidMount() {
        this.props.getProjectBacklog(this.props.match.params.projectIdentifier, this.props.history);
    }

    render() {
        const {projectIdentifier} = this.props.match.params;
        const {project_tasks} = this.props.backlog;
        const {errors} = this.state;
        let boardContent;

        const boardAlgorithm = (errors, project_tasks) => {
            if (project_tasks.length < 1) {
                if (errors.projectIdentifier) {
                    return (
                        <div className="alert alert-danger text-center" role="alert">{errors.projectIdentifier}</div>
                    )
                } else {
                    return(
                        <div className="container">
                            <Link to={`/addProjectTask/${projectIdentifier}`} className="btn btn-primary mb-3">
                                <i className="fas fa-plus-circle"> Create Project Task</i>
                            </Link>
                            <br />
                            <hr />
                            <div className="alert alert-info text-center">No Project Tasks on this board</div>
                        </div> 
                    )
                }
            } else {
                return(
                    <div className="container">
                            <Link to={`/addProjectTask/${projectIdentifier}`} className="btn btn-primary mb-3">
                                <i className="fas fa-plus-circle"> Create Project Task</i>
                            </Link>
                            <br />
                            <hr />
                            <Backlog project_tasks_prop={project_tasks}/>
                        </div> 
                    
                )
            }
        };

        return (
            boardAlgorithm(errors, project_tasks)
        )
    }
}

ProjectBoard.protoTypes = {
    getProjectBacklog: PropTypes.func.isRequired,
    backlog: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToprops = state => ({
    backlog: state.backlog,
    errors: state.errors
});

export default connect(mapStateToprops, {getProjectBacklog}) (ProjectBoard);