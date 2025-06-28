import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "../../firebase";
import { LOGIN_FAIL, LOGIN_OUT, LOGIN_PROFILE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionsType";




export const login = () => async (dispatch) => {
  try {

     dispatch({
      type: LOGIN_REQUEST
     })
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
    
    const res = await auth.signInWithPopup(provider); 

    console.log(res);
    
    
    const accessToken = res.credential.accessToken; 

    const profile = {
      name : res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture,
    };


    sessionStorage.setItem('yt-access-token', accessToken);
    sessionStorage.setItem('yt-user', JSON.stringify(profile));


    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOGIN_PROFILE,
      payload: profile,
    });

  } catch (error) {
    console.error("Login error:", error);
    
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message
    })
  }
};



export const log_out = () => async (dispatch) => {
  try {
    await auth.signOut();
    
    // Use the same keys you used in login
    sessionStorage.removeItem('yt-access-token');
    sessionStorage.removeItem('yt-user');
    
    dispatch({
      type: LOGIN_OUT,
    });
    
  } catch (error) {
    console.error("Logout error:", error);
    // You might want to dispatch an error action here
  }
};