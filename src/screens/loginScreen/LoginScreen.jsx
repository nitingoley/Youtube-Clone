import React, { useEffect } from "react";
import "./loginscreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import {useNavigate} from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const accessToken = useSelector(state=> state.auth.accessToken);
  const handleClick = () => {
    dispatch(login());
  };


  useEffect(()=>{
    if(accessToken) {
      navigate("/")
    }
  },[accessToken]);

  return (
    <div className="login">
      <div className="login__container">
        <img
          className="header__logo"
          src="https://imgs.search.brave.com/0jMEbl-2WeSaQHRXZ2T0rRRxpr6bYa9d5QILr3u6B8M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L1lvdXR1YmUtTG9n/by01MDB4MjgxLnBu/Zw"
          alt="logo"
        />
        <button onClick={handleClick}>Login with Google</button>
        <p>
          This is a clone of YouTube. It is made for educational purposes only.
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
