import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../components/pages/home/Home";
import { Auth } from "../components/pages/login/Auth";
import Record from "../components/pages/record/Record";
import Navbar from "../components/organism/Navbar/Navbar";

export const RoutsApp = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    function changeToken() {
      let token = localStorage.getItem("user");
      setToken(token);
      }
    setInterval(changeToken, 100)
  }, [token]);

  return (
    <div>

      <Routes>
        {/* <Route path="/" element={token ? <Navigate to="/home" /> : <Auth />} /> */}
        <Route path="/*" element={token ? <Home /> : <Auth />} />
        <Route
            path="record"
            element={
              localStorage.getItem("user") ? <Record /> : <Auth />
            }
          />
      </Routes>
      {token &&
        <Navbar/>
      
      }
    </div>
  );
};