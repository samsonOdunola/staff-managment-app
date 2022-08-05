import { Routes, Route } from "react-router-dom";
import Homepage from "./AdminPages/Homepage";
import Landingpage from "./AdminPages/Landingpage";
import Newstaffform from "../src/AdminPages/Newstaffform";
import Userlandingpage from "./UserPages/Landingpage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home/*" element={<Homepage />} />
        <Route path="/*" element={<Landingpage />} />
        <Route path="/adduser" element={<Newstaffform />} />
        <Route path="/user/*" element={<Userlandingpage />} />
      </Routes>
    </div>
  );
}

export default App;
