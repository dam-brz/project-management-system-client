import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { deleteProject } from '../../actions/projectActions';
import PropTypes from "prop-types";

class ProjectItem extends Component {

    onButtonDeleteClick = projectIdentifier => {
        this.props.deleteProject(projectIdentifier);
    }

    render() {
        const {project} = this.props;
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">{project.projectIdentifier}</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{project.projectName}</h3>
                            <p>{project.projectIdentifier}</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">  
                                 <Link to={`/projectBoard/${project.projectIdentifier}`}>
                                    <li className="list-group-item board">
                                        <i className="bi bi-kanban">Project Board </i>
                                    </li>
                                </Link>
                                <Link to={`/updateProject/${project.projectIdentifier}`}>
                                    <li className="list-group-item update">
                                        <i className="bi bi-pencil-square">Update Project Info</i>
                                    </li>
                                </Link>
                                <li 
                                    className="list-group-item delete" 
                                    onClick={this.onButtonDeleteClick.bind(this, project.projectIdentifier)}>
                                    <i className="bi bi-trash">Delete Project</i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ProjectItem.protoTypes = {
    deleteProject: PropTypes.func.isRequired,
};

export default connect(null, {deleteProject}) (ProjectItem) 
