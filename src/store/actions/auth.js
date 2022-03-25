import axios from "axios";
import { authConstants } from "../constants/constants";

export const login = (user) => {
    return async (dispatch) => {
        try {
        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post("https://assignment-venturepact.herokuapp.com/login", {
            ...user
        });

        console.log(res,"res")
        if(res.status === 200){
            console.log(res.data.Data,"res")
            const user = res.data.Data;
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: { 
                    user:user
                }
            });
        }else{
        dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: { error: res.data.message }
        })
}
    }  catch(error){
        console.log(error)
    }
    }
}