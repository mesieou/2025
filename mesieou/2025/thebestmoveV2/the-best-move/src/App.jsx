import { useState } from "react";
import "./style/App.css";
import "./style/index.css";
import "./style/components/section1.css";
import "./style/components/navbar.css";

import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Navbar />
        <Section1 />
      </div>
    </>
  );
}

export default App;
