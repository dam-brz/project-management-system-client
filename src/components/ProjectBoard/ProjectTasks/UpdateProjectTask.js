import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import classnames from "classnames";
import { getProjectTask, updateProjectTask } from '../../../actions/backlogActions';

class UpdateProjectTask extends Component {

    constructor() {
        super();

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

    componentDidMount() {
        const {projectIdentifier, projectSequence} = this.props.match.params;
        this.props.getProjectTask(projectIdentifier, projectSequence,this.props.history)
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors:nextProps.errors })
        }
        const { summary , acceptanceCriteria , status , priority , dueDate } = nextProps.project_task;
        this.setState({ summary , acceptanceCriteria , status , priority , dueDate });
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value})    
    }

    onSubmit(e) {
        e.preventDefault();

        const projectIdentifier = this.props.project_task.projectIdentifier;
        const projectSequence = this.props.project_task.projectSequence;
        const history = this.props.project_task.projectSequence;

        const project_task = {
            "summary": this.state.summary,
            "acceptanceCriteria": this.state.acceptanceCriteria,
            "status": this.state.status,
            "priority": this.state.priority,
            "dueDate": this.state.dueDate
        };
        this.props.updateProjectTask(projectIdentifier, project_task, projectSequence, history)
    };

    render() {
        const projectIdentifier = this.props.project_task.projectIdentifier;
        const {errors} = this.state;
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/projectBoard/${this.props.project_task.projectIdentifier}`} className="btn btn-light">
                                Back to Project Board
                            </Link>
                            <h4 className="display-4 text-center">Update Project Task</h4>
                            <p className="lead text-center">Project Name: {this.props.project_task.projectIdentifier} | Project Code: {this.props.project_task.projectSequence}</p>
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
                                        className="form-control form-control-lg" 
                                        placeholder="Acceptance Criteria" 
                                        name="acceptanceCriteria"
                                        value={this.state.acceptanceCriteria}
                                        onChange={this.onChange}
                                    >
                                    </textarea>
                                </div>
                                <div className="form-group mb-2">
                                    <h6>Due Date</h6>
                                    <input 
                                        type="date" 
                                        className="form-control form-control-lg" 
                                        name="dueDate"
                                        value={this.state.dueDate} 
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <select className="form-control form-control-lg" name="priority" value={this.state.priority} onChange={this.onChange}>
                                        <option value={0}>Select Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>

                                <div className="form-group mb-2">
                                    <select className="form-control form-control-lg" name="status" value={this.state.status} onChange={this.onChange}>
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

UpdateProjectTask.protoTypes = {
    getProjectTask: PropTypes.func.isRequired,
    updateProjectTask: PropTypes.func.isRequired,
    project_task: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToprops = state => ({
    project_task: state.backlog.project_task,
    errors: state.errors
});

export default connect(mapStateToprops, {getProjectTask, updateProjectTask}) (UpdateProjectTask);