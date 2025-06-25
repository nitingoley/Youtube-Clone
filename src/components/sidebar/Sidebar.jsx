import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdHome,
  MdLibraryBooks,
  MdHistory,
  MdSentimentVeryDissatisfied,
  MdExitToApp,
  MdThumbUp,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { useNavigate } from "react-router-dom";






function Sidebar({ sidebar, handleToggleSidebar }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const LogoutHandler = () => {
    dispatch(log_out());
    navigate('/auth')
  };
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>

      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>

      <li>
        <MdThumbUp size={23} />
        <span>Liked</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li>
        <MdSentimentVeryDissatisfied size={23} />
        <span>Not Liked</span>
      </li>
      <hr />
      <li
        onClick={() => {
          console.log("Logout clicked");
          LogoutHandler();
        }}
      >
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
}

export default Sidebar;
