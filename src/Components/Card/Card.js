import React, { useState } from 'react'
import "./Card.css"
import {Link, useNavigate} from "react-router-dom"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards({title,poster_url,releaseDate,id}) {

const navigete= useNavigate()

  return (
    <Card sx={{ 
        width: 280,
        margin:2,
        height:500,
        borderRadius: 5,
        ":hover":{
            boxShadow:"10px 10px 20px #ccc"
        },
     }}>
        <img  src={poster_url} alt={title}
        width="100%"
        height={"70%"}
        className="img-card"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions  onClick={()=>navigete(`/booking/${id}`)}>
      <Button className='booknow' sx={{margin:"auto",backgroundColor:"#900C3F",color:"white"}}  size="small">Book</Button>
      </CardActions>
    </Card>
  )
}
