import axios from "axios";
import { GET_ERRORS } from "./type";

export const createNewUser = (newUser, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/users/register", newUser);
        history.push("/login");
         dispatch({
             type: GET_ERRORS,
             payload: {}
         });
    } catch (error) {
        console.log(error.response.data);
         dispatch({
             type:GET_ERRORS,
             payload: error.response.data
         });
    }
    
};