import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {


  return (
    <div>
      <h2>Profile</h2>
        
        <div className="Profile">

      <Link to={"Clothes"}>Clothes</Link>
      <Link to={"Footwear"}>Footwear</Link>
      <Link to={"Accessories"}>Accessories</Link>

      </div>

      <Outlet/>
    </div>
  )
}
