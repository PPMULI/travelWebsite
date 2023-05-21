import React from 'react'
import { useNavigate } from 'react-router-dom'

function Validation() {
    const navigate = useNavigate()
    if(!localStorage.getItem("token"))
    {
        navigate("/login");
    }
  return (
    <></>
  )
}

export default Validation