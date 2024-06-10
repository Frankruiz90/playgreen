import { Suspense, useContext, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../components/pages/home/Home";
import { Auth } from "../components/pages/login/Auth";
import Record from "../components/pages/record/Record";
import Navbar from "../components/organism/Navbar/Navbar";
import { ClassContext } from "../ClassContext";

export const RoutsApp = () => {
  const [token, setToken] = useState("");
  const { isActive } = useContext(ClassContext);

  useEffect(() => {
    function changeToken() {
      let token = localStorage.getItem("user");
      setToken(token);
    }
    setInterval(changeToken, 100);
  }, [token]);

  return (
    <div className={"App" + (isActive ? " light" : "")}>
      <Suspense>
        <Routes>
          <Route path="/*" element={token ? <Home /> : <Auth />} />
          <Route
            path="record"
            element={localStorage.getItem("user") ? <Record /> : <Auth />}
          />
        </Routes>
        {token && <Navbar />}
      </Suspense>
    </div>
  );
};
