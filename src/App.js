import React, { useState } from "react";

import "./App.css";
import SideBar from "./SideBar";

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="app">
      <header>
        <button onClick={() => setShowNav(!showNav)}>=</button>
      </header>
      <SideBar show={showNav} />
    </div>
  );
}

export default App;
