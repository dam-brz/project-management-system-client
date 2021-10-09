import axios from "axios";
import { GET_ERRORS, GET_BACKLOG, GET_PROJECT_TASK } from "./type";

export const addProjectTask = (projectIdentifier, projectTask, history) => async dispatch => {
    
    try {
        await axios.post(`http://localhost:8080/api/backlogs/${projectIdentifier}`, projectTask);
        history.push(`/projectBoard/${projectIdentifier}`);
        dispatch({
            type:GET_ERRORS,
            peyload:{}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            peyload: error.response.data
        });
    }
};

export const getProjectBacklog = (projectIdentifier, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/backlogs/${projectIdentifier}`);
        dispatch({
            type: GET_BACKLOG,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            peyload: error.response.data
        });
    }
    
};

export const getProjectTask = (projectIdentifier, projectSequence, history) => async dispatch => {
     try {
        const res = await axios.get(`http://localhost:8080/api/backlogs/${projectIdentifier}/${projectSequence}`);
        dispatch({
            type: GET_PROJECT_TASK,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            peyload: error.response.data
        });
        history.push(`/projectBoard/${projectIdentifier}`);
    }
    
};

export const updateProjectTask = (projectIdentifier, project_task, projectSequence, history) => async dispatch => {
    try {
        const res = await axios.put(`http://localhost:8080/api/backlogs/${projectIdentifier}/${projectSequence}`, project_task);
        history.push(`/projectBoard/${projectIdentifier}`);
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