import React, { useState } from "react";
import "./Sidebar.css";
const SideBar = ({ show }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className={show ? "overlay active" : "overlay"}></div>
      <div className={show ? "sidebar active" : "sidebar"}>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
