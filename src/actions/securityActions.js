import axios from "axios";
import setJWToken from "../securityUtils/setJWToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./type";
import jwt_decode from "jwt-decode"

export const createNewUser = (newUser, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/users/register", newUser);
        history.push("/login");
         dispatch({
             type: GET_ERRORS,
             payload: {}
         });
    } catch (error) {
         dispatch({
             type:GET_ERRORS,
             payload: error.response.data
         });
    }
    
};

export const login = LoginReques => async dispatch =>{
    try {
        const res = await axios.post("http://localhost:8080/api/users/login", LoginReques);
        const { token } = res.data;
        const { roles } = res.data;
        localStorage.setItem("jwtToken", token);
        setJWToken(token);
        const decoded = jwt_decode(token);
        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded,
            roles: roles
        });
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload: error.response.data
        });
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    })
}