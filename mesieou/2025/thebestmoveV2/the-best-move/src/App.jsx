import "./style/App.css";
import "./style/index.css";
import "./style/components/Main.css";
import "./style/components/Navbar.css";
import "./style/components/Footer.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
