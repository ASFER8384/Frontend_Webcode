import React, { useEffect, useState } from 'react'
import { getUserBooking } from '../../api/api'
import "./Profile.css"

export default function Page() {

  const [booking,setBooking]=useState()

  useEffect(()=>{
    getUserBooking().then((data)=>setBooking(data)).catch((err)=>console.log(err))
  },[])
  console.log(booking.user)
  return (
    <div className='profile'>
      <div className='profile-wrapper'>
            <div className='one'>
             
            </div>
            <div className='two'>2</div>
      </div>
    </div>
  )
}
