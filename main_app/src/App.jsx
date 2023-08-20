import { useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";

function App() {
  const [isDark, setToDark] = useState(false);
  return (
    <div
      className="main relative -top-3"
      style={isDark ? { backgroundColor: "#3A4852",color : "#FFF" } : null}
    >
      <div className="logo m-3">
        <h3 className="text-center w-fit leading-8 ml-5">
          Boopathi
          <br />
          Raj
        </h3>
      </div>
      <div className="navbar fixed right-0 top-0 m-2 z-50">
        <Nav SessionChange={(value) => setToDark(value)} />
      </div>
      <div className="component home">
        <Home darkmode={isDark}/>
      </div>
      <div className="component about">
        <About />
      </div>
    </div>
  );
}

export default App;
