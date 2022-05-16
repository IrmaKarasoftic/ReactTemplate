import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div>
          <a href="/car/1">Car 1</a>
        </div>
        <div>
          <a href="/car/2">Car 2</a>
        </div>
        <div>
          <a href="/car/3">Car 3</a>
        </div>
        <div>
          <a href="/vin">Vin decoder</a>
        </div>
        <div>
          <a href="/cars">Cars</a>
        </div>
        <div>
          <a href="/cards">Cards</a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
