import "./App.scss";
import { useFirebaseApp } from "reactfire";
import "../src/assets/scss/main.scss";
import { RoutsApp } from "./routes/RoutsApp";

function App() {



  return (
    <div className="App">
      <div className="container-components">
        <RoutsApp />
      </div>
    </div>
  );
}

export default App;
