import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Landingpage from "./Pages/Landingpage";
import Newstaffform from "../src/Pages/Newstaffform";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home/*" element={<Homepage />} />
        <Route path="/*" element={<Landingpage />} />
        <Route path="/adduser" element={<Newstaffform />} />
      </Routes>
    </div>
  );
}

export default App;
