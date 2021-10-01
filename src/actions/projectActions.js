import axios from "axios";
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS } from "./type";

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

export const getProject = (id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/projects/${id}`);
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        });
    } catch (error) {
        history.push("/dashboard")
    }
    
};

export const updateProject = (id, project, history) => async dispatch => {
    try {
        const res = await axios.put(`http://localhost:8080/api/projects/${id}`);
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
