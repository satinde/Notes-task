import { authConstants } from "../constants/constants";

const initState = {
    user: {},
    loggedIn: false,
    loading: false,
    error: null
};

export default (state = initState, action) => {

    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return{
                ...state,
                loggedIn:false,
                loading:true,
            }
        case authConstants.LOGIN_SUCCESS:
            return{
                ...state,
                loggedIn:true,
                loading:false,
                user:action.payload.user,
            }
        case authConstants.LOGIN_FAILURE:
            return{
                ...state,
                loggedIn:false,
                loading:false,
                error: action.payload.error,
            }

    }


    return state;
}