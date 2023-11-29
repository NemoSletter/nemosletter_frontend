import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import CV from "./pages/CV_page";
import CVMaker from "./pages/CVMaker_page";
import Mail from "./pages/Mail_page";
import Newsletter from "./pages/Newsletter_page";
import Profile from "./pages/Profile_page";
import Home from "./pages/Home_page";
import Admin from "./pages/Admin_dashboard";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cv" element={<CV />}></Route>
        <Route path="/cv/cv_maker" element={<CVMaker />}></Route>
        <Route path="/mail" element={<Mail />}></Route>
        <Route path="/newsletter" element={<Newsletter />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
