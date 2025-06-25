import {
  LOGIN_FAIL,
  LOGIN_OUT,
  LOGIN_PROFILE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionsType";

const initialState = {
  accessToken: sessionStorage.getItem('yt-access-token') || null,
  user: sessionStorage.getItem('yt-user') 
    ? JSON.parse(sessionStorage.getItem('yt-user')) 
    : null,
  loading: false,
  error: null,  
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
        error: null,  // Clear any previous errors
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
        error: null,
      };

    case LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        user: null,
        loading: false,
        error: payload,
      };

    case LOGIN_PROFILE:
      return {
        ...prevState,
        user: payload,
      };

    case LOGIN_OUT:
      return {
        ...initialState,  
        accessToken: null,
        user: null,
         
      };

    default:
      return prevState;
  }
};