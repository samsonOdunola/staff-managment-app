import Navlinks from "./Navlinks";
import { AiOutlinePoweroff } from "react-icons/ai";
import Smallprofileimage from "./Smallprofileimage";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="menuicons">
        <img
          className="logo"
          src={require("../images/400dpiLogo.png")}
          alt=""
        />
        <Navlinks />
      </div>
      <div className="navsec2">
        {/* <Smallprofileimage /> */}
        <button onClick={logout}>
          <AiOutlinePoweroff />
        </button>
      </div>
      <img
        className="logo mobileonly"
        src={require("../images/400dpiLogo.png")}
        alt=""
      />
      <CgMenuRight onClick={toggleMenu} className="mobileonly mobilemenuicon" />
      {showMenu && (
        <div className="mobileonly mobilemenu">
          <Navlinks />
          <Smallprofileimage />
          <button onClick={logout()}>
            <AiOutlinePoweroff />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
