import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div>
          <a href="/menuItem/1">Menu 1</a>
        </div>
        <div>
          <a href="/menuItem/2">Menu 2</a>
        </div>
        <div>
          <a href="/menuItem/3">Menu 3</a>
        </div>
        <div>
          <a href="/cards">Cards</a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
