import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem'

export default class Dashboar extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <ProjectItem />
            </div>
        )
    }
}

