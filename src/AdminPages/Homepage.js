import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Dashboard from "../Components/Dashboard";
import AllUser from "./AllUser";

const Homepage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Staff_List" element={<AllUser />} />
      </Routes>
    </main>
  );
};

export default Homepage;
