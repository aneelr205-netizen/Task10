import React from 'react';
import ParamHook from './Compound.jsx/ParamHook';
import { useNavigate } from 'react-router-dom';
import CustomH from './Component.jsx/CustomH';

export default function Home() {
      
      const Page = useNavigate();

  return (
    <div>
      <h2>Home</h2>
       <CustomH/><br></br>
      <button onClick={() => Page("/Profile")}>Move to Profile</button>
      <ParamHook/>
    </div>
  )
}
