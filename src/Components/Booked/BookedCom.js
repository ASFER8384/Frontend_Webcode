import React, { Children, useState } from 'react'
import { newBooking } from '../../api/api'
import "./Booked.css"

export default function BookedCom() {

  const [SeatNumber, setSeatNumber] = useState("")
  const [Date, setDate] = useState("")

  // const handlechange = (e) => {
  //   setInput((prevstate) => ({ ...prevstate, [e.target.name]: e.target.value }))
  // }

  const handlesubmit = (e) => {
    e.preventDefault()
    const inputs=({
      seatNumber:SeatNumber,
      date:Date,
    })
    

  }


  return (
    <>
      <div className='booke'>
        <div className='booked-wrapper'>
          <form onSubmit={handlesubmit}>
            <label className='label' for="">Seat Number</label><br></br>
            <input
              onChange={(e)=>setSeatNumber(e.target.value)}
              className='inp'
              type={"number"}
              name="setnumber"
              id='setnumber'
            /><br></br><br></br>
            <label className='label' for="">Date</label><br></br>
            <input
             onChange={(e)=>setDate(e.target.value)}
              className='inp'
              type={"date"}
              name="date" 
              id='setnumber'
              />
            <button type='submit' className='btn-booked'>pay</button>
          </form>
        </div>
        <div className='booked'>
        </div>
      </div>
    </>


  )
}
