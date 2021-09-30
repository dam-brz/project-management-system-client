import React, { Component } from 'react'

export default class ProjectItem extends Component {
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
                                <a href="#">
                                    <li className="list-group-item board">
                                        <i className="bi bi-kanban">Project Board </i>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="list-group-item update">
                                        <i className="bi bi-pencil-square">Update Project Info</i>
                                    </li>
                                </a>
                                <a href="">
                                    <li className="list-group-item delete">
                                        <i className="bi bi-trash">Delete Project</i>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
