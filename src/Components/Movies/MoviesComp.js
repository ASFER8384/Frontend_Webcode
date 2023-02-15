import React, { useEffect, useState } from 'react'
import {Box,Typography} from "@mui/material"
import { getAllMovies } from '../../api/api'
import Cards from '../Card/Card'

export default function MoviesComp() {

    const [movies,setMovies]=useState([])

    useEffect(()=>{
      getAllMovies().then((data)=>setMovies(data.movies)).catch((err)=>console.log(err))
    },[])
  return (
    <div>
        <Box margin={"auto"} marginTop={3}  >
            <Typography 
            bgcolor={"#900C3F"}
            color="white"
             variant='h4' 
             padding={2} 
             textAlign="center"
             marginBottom={5}
             >
                All Movies
            </Typography>
            <Box   marginTop={5} marginLeft={5}  width={"100%"} margin="auto" display={"flex"}
            justifyContent="center" flexWrap={"wrap"}>
                {movies && movies.map((movie,i)=>(<Cards key={i} poster_url={movie.poster_url} title={movie.title} releaseDate={movie.releaseDate} id={movie._id}/>))}
            </Box>
            
        </Box>
    </div>
  )
}
