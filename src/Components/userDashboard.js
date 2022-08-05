import { FiSettings } from "react-icons/fi";
const Userdashboard = ({ user }) => {
  return (
    <div className="userLandingPage">
      <div className="userSec1">
        <img src={require("../images/image-3.png")}></img>
      </div>
      <div className="userSec2 parent">
        <div className="div1">
          <h1>Hello Samson, what would you like to do </h1>
        </div>
        <div
          className="div2 tile"
          style={{ backgroundColor: "hsl(213, 82%, 80%)" }}
        >
          <div className="container">
            <FiSettings
              className="icon"
              style={{ color: "hsl(213, 82%, 15%)" }}
            />
            <p>Update/Edit Profile</p>
          </div>
        </div>
        <div
          className="div3 tile"
          style={{ backgroundColor: "hsl(6, 100%, 80%)" }}
        >
          <div className="container">
            <FiSettings
              className="icon"
              style={{ color: "hsl(6, 100%, 66%)" }}
            />
            <p>Leave/Off Days</p>
          </div>
        </div>
        <div
          className="div4 tile"
          style={{ backgroundColor: "hsl(48, 100%, 80%)" }}
        >
          <div className="container">
            <FiSettings
              className="icon"
              style={{ color: "hsl(48, 100%, 50%)" }}
            />
            <p>Update/Edit Profile</p>
          </div>
        </div>
        <div
          className="div5 tile"
          style={{ backgroundColor: "hsl(180, 100%, 80%)" }}
        >
          <div className="container">
            <FiSettings
              className="icon"
              style={{ color: "hsl(180, 100%, 50%)" }}
            />
            <p>Update/Edit Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;
