import { useState } from "react";
import "./style/App.css";
import "./style/index.css";
import "./style/components/Main.css";
import "./style/components/Header.css";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
