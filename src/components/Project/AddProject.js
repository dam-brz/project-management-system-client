import React, { Component } from 'react'

export default class AddProject extends Component {
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

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value})
    };

    onSubmit(e) {
        e.preventDefault();
        const newProject = {
            "projectName": this.state.projectName,
            "projectIdentifier": this.state.projectIdentifier,
            "description": this.state.description,
            "startDate": this.state.startDate,
            "endDate": this.state.endDate
        }
    };

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Project form</h5>
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
                                        onChange={this.onChange}/>
                                </div>
                                <div className="form-group mb-2">
                                    <textarea 
                                        className="form-control form-control-lg" 
                                        placeholder="Project Description" 
                                        name="description" 
                                        value={this.state.description}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group my-4">
                                    <h6>Start Date</h6>
                                    <input 
                                        type="date" 
                                        className="form-control form-control-lg" 
                                        name="start_date" 
                                        name="startDate" 
                                        value={this.state.startDate} 
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group my-2">
                                    <h6>Estimated End Date</h6>
                                    <input 
                                        type="date" 
                                        className="form-control form-control-lg" 
                                        name="end_date" 
                                        name="endDate" 
                                        value={this.state.endDate}
                                        onChange={this.onChange} 
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}