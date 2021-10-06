import axios from "axios";
import { GET_ERRORS, GET_BACKLOG } from "./type";

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
        history.push("/dashboard")
    }
    
};