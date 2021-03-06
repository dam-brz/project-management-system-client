import React, { Component } from 'react'
import ProjectTask from './ProjectTasks/ProjectTask';

class Backlog extends Component {
    render() {
        const {project_tasks_prop} = this.props;
        const tasks = project_tasks_prop.map(project_task => (
            <ProjectTask key={project_task.projectSequence} project_task={project_task}/>
        ));

        let toDoTasks = [];
        let inProgressTasks = [];
        let doneTasks = [];

        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].props.project_task.status === "TO_DO") {
                toDoTasks.push(tasks[i]);
            }

            if (tasks[i].props.project_task.status === "IN_PROGRESS") {
                inProgressTasks.push(tasks[i]);
            }

            if (tasks[i].props.project_task.status === "DONE") {
                doneTasks.push(tasks[i]);
            }
            
        }
        

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>TO DO</h3>
                            </div>
                            {toDoTasks}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Progress</h3>
                            </div>
                            {inProgressTasks}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                            {doneTasks}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Backlog;