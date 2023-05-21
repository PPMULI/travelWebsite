import React from 'react'
import user from "../images/user.png"
import Usercard from './Usercard'
import Sidebar from '../Sidebar'
function Userdetails() {
  return (
    <>
    <Sidebar />
    <div className='container info'>
        <img src={user} class="img-thumbnail profilepic" alt="..."></img>
        <hr /><hr />
        <Usercard />
    </div>
    </>
  )
}

export default Userdetails