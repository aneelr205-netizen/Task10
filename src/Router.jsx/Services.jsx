import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <h2>Services</h2>

      <div className="sub-header">

       <Link to={"WebD"}>WebD</Link>

        <Link to={"AppD"}>AppD</Link>
       
         <Link to={"UIUX"}>UIUX</Link>

      </div>
      <Outlet/>
     
    </div>
  )
}

