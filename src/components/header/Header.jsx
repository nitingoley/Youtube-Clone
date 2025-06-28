import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useSelector } from "react-redux";

const Header = ({ handleToggleSidebar }) => {
  const { user } = useSelector((state) => state.auth);
  const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar(false)}
      />

      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        alt="YouTube Logo"
      />

      <form action="">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch className="header_search" size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications className="header_icon" size={26} />
        <MdApps className="header__icon" size={26} />
        <img
          className="header_avatar"
          src={user?.photoURL || defaultAvatar}
          alt={user?.name || "Avatar"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultAvatar;
          }}
        />
      </div>
    </div>
  );
};

export default Header;
