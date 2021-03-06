import classnames from "classnames";
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProjectTask } from '../../../actions/backlogActions';
import PropTypes from "prop-types"

class AddProjectTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "summary": "",
            "acceptanceCriteria": "",
            "status": "",
            "priority": "",
            "dueDate": "",
            "errors": {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value})
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const projectIdentifier = this.props.match.params.projectIdentifier;
        const task = {
            "summary": this.state.summary,
            "acceptanceCriteria": this.state.acceptanceCriteria,
            "status": this.state.status,
            "priority": this.state.priority,
            "dueDate": this.state.dueDate
        };

        this.props.addProjectTask(projectIdentifier, task, this.props.history);
    };

    render() {
        const {projectIdentifier} = this.props.match.params;
        const {errors} = this.state;
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/projectBoard/${projectIdentifier}`} className="btn btn-light">
                                Back to Project Board
                            </Link>
                            <h4 className="display-4 text-center">Add Project Task</h4>
                            <p className="lead text-center">Project Name + Project Code</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group mb-2">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.summary
                                        })} 
                                        name="summary" 
                                        placeholder="Project Task summary" 
                                        value={this.state.summary}
                                        onChange={this.onChange} 
                                    />
                                    {errors.summary && (
                                        <div className="invalid-feedback">
                                            {errors.summary}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group mb-2">
                                    <textarea 
                                    className={classnames("form-control form-control-lg ", {
                                        "is-invalid": errors.acceptanceCriteria
                                    })} 
                                        placeholder="Acceptance Criteria" 
                                        name="acceptanceCriteria"
                                        value={this.state.acceptanceCriteria}
                                        onChange={this.onChange}
                                    >
                                    </textarea>
                                    {errors.acceptanceCriteria && (
                                        <div className="invalid-feedback">
                                            {errors.acceptanceCriteria}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group mb-2">
                                    <h6>Due Date</h6>
                                    <input 
                                        type="date"
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.dueDate || errors.date
                                        })}
                                        name="dueDate"
                                        value={this.state.dueDate}
                                        onChange={this.onChange} 
                                    />
                                    {errors.dueDate && (
                                        <div className="invalid-feedback">
                                            {errors.dueDate}
                                        </div>
                                    )}
                                    {errors.date && (
                                        <div className="invalid-feedback">
                                            {errors.date}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group mb-2">
                                    <select 
                                        className="form-control form-control-lg" 
                                        name="priority" 
                                        value={this.state.priority}
                                        onChange={this.onChange} 
                                    >
                                        <option value={0}>Select Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>

                                <div className="form-group mb-2">
                                    <select 
                                        className="form-control form-control-lg" 
                                        name="status" 
                                        value={this.state.status}
                                        onChange={this.onChange} 
                                    >
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AddProjectTask.protoTypes = {
    addProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToprops = state => ({
    errors: state.errors
});

export default connect(mapStateToprops, {addProjectTask}) (AddProjectTask);
