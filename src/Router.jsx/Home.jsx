import React from 'react'
import ParamHook from './Compound.jsx/ParamHook'
import { useNavigate } from 'react-router-dom'

export default function Home() {
      
      const Page = useNavigate();

  return (
    <div>
      <h2>Home</h2>

      <button onClick={() => Page("/Profile")}>Move to Profile</button>
      <ParamHook/>
    </div>
  )
}
