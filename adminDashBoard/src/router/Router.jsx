import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Settings from "../pages/Settings";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../layouts/Sidebar";
import Login from "../pages/Login";

function Router() {
    const [user,setUser] = useState(true)
  return (
    <div>
      <BrowserRouter>
        <Routes>
         { user?<Route path="/" element={<App />} />: <Route path="/" element={<Login/>} /> }
          <Route path="/sana" element={<Settings />} />
          <Route path="/meycem" element={<Dashboard />} />
          <Route path="/riadh" element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
