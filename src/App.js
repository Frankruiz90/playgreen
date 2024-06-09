import "./App.scss";
import { useFirebaseApp } from "reactfire";
import "../src/assets/scss/main.scss";
import { RoutsApp } from "./routes/RoutsApp";
import { Suspense } from "react";

function App() {



  return (
    <div className="App">
      <div className="container-components">
      <Suspense>
        <RoutsApp />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
