import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem'

export default class Dashboar extends Component {
    render() {
        return (
            <div>
                <h1 className="alert alert-success">Dashboard</h1>
                <ProjectItem />
            </div>
        )
    }
}

