import React, { useEffect, useState } from 'react'
import { getMovie, getUser, getUserBooking } from '../../api/api'
import "./Page.css"

export default function Page() {

const [user,setUser]=useState("")
const [movie,setMovie]=useState([])
const [singlemovie,setSinglemovie]=useState()


    useEffect(() => {
        getUser().then((data) => setUser(data)).
          catch((err) => console.log(err))
      }, [])


      useEffect(() => {
        getMovie().then((data) => setSinglemovie(data)).
          catch((err) => console.log(err))
      }, [])
      console.log(singlemovie)

      useEffect(() => {
        getUserBooking().then((data) => setMovie(data)).
          catch((err) => console.log(err))
         
      }, [])
    
    
    


  return (
    <>
    <h5 className='your-booking'>Your Booking</h5>
    <div className='page'>
        <div className='page-wrapper'>
                <div className='onepage'>
                    <h4>Name:{user.username}</h4>
                    <h4>Email:{user.email}</h4>
                </div>
                <div className='twopage'>
                    {movie.map((data)=>(
                        <>
                        <span>Movie Name:{data.movie}</span>
                        </>
                    ))}
                </div>
        </div>
    </div>
    </>
  )
}
