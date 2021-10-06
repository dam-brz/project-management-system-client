import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Backlog from './Backlog';
import PropTypes from "prop-types";
import { getProjectBacklog } from '../../actions/backlogActions';

class ProjectBoard extends Component {

    componentDidMount() {
        this.props.getProjectBacklog(this.props.match.params.projectIdentifier, this.props.history);
    }

    render() {
        const {projectIdentifier} = this.props.match.params;
        const {project_tasks} = this.props.backlog;
        return (
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
}

ProjectBoard.protoTypes = {
    getProjectBacklog: PropTypes.func.isRequired,
    backlog: PropTypes.object.isRequired
};

const mapStateToprops = state => ({
    backlog: state.backlog
});

export default connect(mapStateToprops, {getProjectBacklog}) (ProjectBoard);