import Navlinks from "./Navlinks";
import { FiLogOut } from "react-icons/fi";
import Smallprofileimage from "./Smallprofileimage";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
        <Smallprofileimage />
        <button>
          <FiLogOut />
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
          <button>
            <FiLogOut />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
