import axios from "axios";
import { GET_ERRORS } from "./type";

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