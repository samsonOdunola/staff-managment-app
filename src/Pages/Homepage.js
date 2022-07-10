import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Dashboard from "../Components/Dashboard";
const Homepage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
};

export default Homepage;
