import axios from "axios";
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS } from "./type";

const PROJECTS_URL = "http://localhost:8080/api/projects";

export const createProject = (project, history) => async dispatch => {
    try {
        const res = await axios.post(PROJECTS_URL, project);
        history.push("/dashboard")
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            peyload:error.response.data
        });
    }
};

export const getProjects = () => async dispatch => {
    const res = await axios.get(PROJECTS_URL);
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    });
};

export const getProject = (id, history) => async dispatch => {
    const res = await axios.get(PROJECTS_URL + "/" + id);
    dispatch({
        type: GET_PROJECT,
        payload: res.data
    });
};

export const updateProject = (id, project, history) => async dispatch => {
    try {
        const UPDATE_PROJECT_URL = PROJECTS_URL + "/" + id;
        const res = await axios.put(UPDATE_PROJECT_URL, project);
        history.push("/dashboard")
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            peyload:error.response.data
        });
    }
};
