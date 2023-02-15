import React, { useEffect, useState } from 'react'
import { AddMovie } from '../../api/api'
import "./Addmovie.css"

export default function AddmoviesComp() {

const [title,settitle]=useState()
const [description,setdescription]=useState()
const [poster_url,setposter_url]=useState()
const [releaseDate,setreleaseDate]=useState()
const [actors,setactors]=useState()

const input =({title:title,description:description,poster_url:poster_url,releaseDate:releaseDate,actors:actors})

const handleClick=(e)=>{
    e.preventDefault()
    AddMovie(input).then((res)=>console.log(res)).catch((err)=>console.log(err))
   console.log(input)

}

// const [adddmovie,setAddmovie]=useState()

//   useEffect(()=>{
   
//   },[])

  return (
    <div className='addmovie'>
        <div className='wrapper-addmovie'>
            <form onSubmit={handleClick}>
                <label className='label'>title</label>
                <input 
                className='inp'
                name='title'
                onChange={(e)=>settitle(e.target.value)}
                /><br></br><br></br>
                <label className='label'>description</label>
                <input 
                className='inp'
                name='description'
                onChange={(e)=>setdescription(e.target.value)}
                /><br></br><br></br>
                <label className='label'>actors</label>
                <input 
                className='inp'
                name='actors'
                onChange={(e)=>setactors(e.target.value)}
                /><br></br><br></br>
                <label className='label'>releadeDate</label>
                <input 
                className='inp'
                name='releadeDate'
                onChange={(e)=>setreleaseDate(e.target.value)}
                /><br></br><br></br>
                <label className='label'>poster_url</label>
                <input 
                className='inp'
                name='poster_url'
                onChange={(e)=>setposter_url(e.target.value)}
                /><br></br>
                <button className='btn'>Create</button>
            </form>
        </div>
    </div>
  )
}
