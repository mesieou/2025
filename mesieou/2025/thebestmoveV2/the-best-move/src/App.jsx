import "./style/App.css";
import "./style/index.css";
import "./style/components/Main.css";
import "./style/components/Navbar.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
