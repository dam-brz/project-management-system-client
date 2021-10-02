import axios from "axios";
import { DELETE_PROJECT, GET_ERRORS, GET_PROJECT, GET_PROJECTS } from "./type";

export const createProject = (project, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/projects", project);
        history.push("/dashboard")
        dispatch({
            type:GET_ERRORS,
            peyload:{}
        });
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            peyload:error.response.data
        });
    }
};

export const getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/projects");
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    });
};

export const getProject = (projectIdentifier, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/projects/${projectIdentifier}`);
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        });
    } catch (error) {
        history.push("/dashboard")
    }
    
};

export const updateProject = (projectIdentifier, project, history) => async dispatch => {
    try {
        const res = await axios.put(`http://localhost:8080/api/projects/${projectIdentifier}`, project);
        history.push("/dashboard")
        dispatch({
            type:GET_ERRORS,
            peyload:{}
        });
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            peyload:error.response.data
        });
    }
};

export const deleteProject = (projectIdentifier) => async dispatch => {
    if (window.confirm("Are you sure? This will delete the project and all the data related to it.")) {
        const res = await axios.delete(`http://localhost:8080/api/projects/${projectIdentifier}`);
    dispatch({
        type:DELETE_PROJECT,
        peyload: projectIdentifier
    });
    }
};