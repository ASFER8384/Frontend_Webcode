import React,{useEffect, useState} from 'react'
import {Box,Typography,Button} from '@mui/material'
import "./Homepage.css"
import {Link} from 'react-router-dom'
import Cards from '../Card/Card'
import { getAllMovies } from '../../api/api'
import ImageSlider from '../../ImageSlider/ImageSlider'

export default function Homepage() {

    const [movies,setMovies]=useState([])

  useEffect(()=>{
    getAllMovies().then((data)=>setMovies(data.movies)).catch((err)=>console.log(err))
  },[])
  return (
    <div className='homepage'>
        <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
            <Box width={"100%"} height="60vh" margin={"auto"} padding={2}>
                {/* <img className='img-hom' src="https://www.mixindia.com/wp-content/uploads/2022/03/Kaari-Tamil-Movie-Poster-1280x720.jpg" alt="tittle-poster"
                width={"100%"}
                height={"100%"}
                /> */}
                <ImageSlider/>
            </Box>
        </Box>
        <Box padding={5} margin="auto">
            <Typography variant='h4' textAlign="center">Latest Relese</Typography>
        </Box>
        <Box display="flex" width="100%" justifyContent="center"
        margin={"auto"} flexWrap="wrap">
            {movies && movies.slice(0,4).map((movie,i)=>(<Cards id={movie._id}
            poster_url={movie.poster_url}
            title={movie.title}
            releaseDate={movie.releaseDate}
             key={i}/>))}
        </Box>
        <Box display="flex"  padding={5} margin="auto">
            <Button LinkComponent={Link} to="/movies" variant='outline' sx={{margin:"auto",color:"#2b2d42",border:"1px solid black"}}>View All Movies</Button>
        </Box>
    </div>
  )
}
