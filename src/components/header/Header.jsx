import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import Logo from "../../../public/logo.png";
const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={()=>handleToggleSidebar(false)}
      />
      <img
        className="header__logo"
        src= "https://imgs.search.brave.com/0jMEbl-2WeSaQHRXZ2T0rRRxpr6bYa9d5QILr3u6B8M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L1lvdXR1YmUtTG9n/by01MDB4MjgxLnBu/Zw"
        alt="logo"
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
          src="https://imgs.search.brave.com/QOecsdnPq78UqgzvEnY5aAHTgaC6tRkfvtb81t7-nb0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWF2YXRhci1pY29u/LWRvd25sb2FkLWlu/LXN2Zy1wbmctZ2lm/LWZpbGUtZm9ybWF0/cy0tdXNlci1kZXNp/Z25lci1hdmF0YXJz/LWZsYXQtaWNvbnMt/cGFjay1wZW9wbGUt/NDU2MzIwLnBuZz9m/PXdlYnAmdz0xMjg"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
