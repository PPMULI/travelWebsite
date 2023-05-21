import React from 'react'
import BookinghistoryDetails from './BookinghistoryDetails'
import Sidebar from '../Dashboard/Sidebar'

function BookingHistory() {
  return (
    <>
    <Sidebar />
    <div className="container">
        <h1 className='bookinghistoryheading'><b><i><u>Booking History</u></i></b></h1>
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
                <BookinghistoryDetails />
            </div>
            <div className="col-lg-2"></div>
        </div>
    </div>
    </>
  )
}

export default BookingHistory