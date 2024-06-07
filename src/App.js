import "./App.scss";
import { useFirebaseApp } from "reactfire";
import { Auth } from "./components/pages/login/Auth";
import "../src/assets/scss/main.scss";
import { useEffect, useState } from "react";
import { Home } from "./components/pages/home/Home";
import Navbar from "./components/organism/Navbar/Navbar";
function App() {
  const firebase = useFirebaseApp();
  const [login, setLogin] = useState(false);

  console.log("hola", firebase);
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  const stateLogin = (e) => {
    setLogin(e);
  };

  return (
    <div className="App">
      <div>{!login && <Auth stateLogin={stateLogin} />}</div>
      <div>
        {login && (
          <div className="container-components">
            <Home  stateLogin={stateLogin} />
            <Navbar></Navbar>{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
