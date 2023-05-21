import React from 'react'
import BuspassengerDetails from './BuspassengerDetails'
import Sidebar from '../Sidebar'

function BuspassengerInfo() {
  return (
    <div>
          <Sidebar />
      <div className="conatiner">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-7">
            <BuspassengerDetails />
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  )
}

export default BuspassengerInfo