import { Box } from '@mui/system'
import {Button } from "@mui/material"
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovie } from '../../api/api'
import "./SingleMovie.css"

export default function SingleMovie() {

const navigate = useNavigate()

  const [movies, setMovies] = useState([])
  const id = useParams().id
  useEffect(() => {
    getMovie(id).then((data) => setMovies(data)).catch((err) => console.log(err))
  }, [id])

  return (
    <div className="singlemovie">
      <div className="singlemovie-wrapper">
        <div className="img-singlemovie">
          <img className="image-single" src={movies.poster_url}/>
        </div>
        <div className="singlemovie-content">
          <h3 className='head-single'>{movies.title}</h3>
          <h3 className='date-single'>Releasing on : {new Date(movies.releaseDate).toDateString()}</h3>
          <div>
          <span className='content-head-single'>About The Movie</span>
          <p className='content-single'>{movies.description}</p>
          </div>
          <span className='cast-single'>Cast:{movies.actors}</span>
        <div className="final-book">
        <button className='btn-book' onClick={()=>navigate("/booked")}>BOOK</button>
        </div>
         
        </div>
      </div>
    </div>
  )
}
//