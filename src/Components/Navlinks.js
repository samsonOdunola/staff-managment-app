import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsListTask } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
const Navlinks = () => {
  const links = [
    { icon: <MdSpaceDashboard />, to: "dashboard" },
    { icon: <HiOutlineUserGroup />, to: "" },
    { icon: <BsListTask />, to: "" },
    { icon: <AiOutlineSetting />, to: "" },
  ];
  return (
    <ul>
      {links.map((link, index) => {
        const { icon, to } = link;
        return (
          <li key={index}>
            <Link to={to} className="navlink">
              {icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlinks;
