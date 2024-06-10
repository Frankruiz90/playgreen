import "./App.scss";
import "../src/assets/scss/main.scss";
import { RoutsApp } from "./routes/RoutsApp";
import { Suspense } from "react";
import Loading from "./components/organism/loading/Loading";
import { ClaseProvider } from "./ClassContext";

function App() {
  return (
    <ClaseProvider>
      <div className={"App"}>
        <div className="container-components">
          <Suspense fallback={<Loading />}>
            <RoutsApp />
          </Suspense>
        </div>
      </div>
    </ClaseProvider>
  );
}

export default App;
