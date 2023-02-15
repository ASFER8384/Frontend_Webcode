import React, { useState,useEffect } from 'react'
import { Dialog, Typography, Box, FormLabel, TextField, Button } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import {Link, useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"


export default function Authform({onSubmit,isAdmin}) {

    const [signup, setSignup] = useState(false)
    const navigate = useNavigate()

const [inputs,setInputs]=useState({
    name:"",
    email:"",
    password:"",
})

const handleChange=(e)=>{
   setInputs((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value
   }))
 }

const handleSubmit=(e)=>{
    e.preventDefault()
   onSubmit({inputs, signup :isAdmin ? false : signup})
   
}

const disatch = useDispatch()

const isadminLoggedin = useSelector((state) => state.admin.isLoggedin)
const isuserLoggedin = useSelector((state) => state.user.isLoggedin)

useEffect(()=>{
if(isuserLoggedin == true){
    navigate("/")
}
if(isadminLoggedin == true){
    navigate("/")
}
})


    return (
        <div>
            <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true} >
                <Box sx={{ ml: "auto", padding: 1, cursor: "pointer", }}>
                    <Link to={"/"}>
                    <CloseIcon />
                    </Link>
                    
                </Box>
                <Typography variant='h4' textAlign={"center"}>
                    {signup ? "Register" : "Login"}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box
                        padding={2}

                        display={"flex"}
                        justifyContent={"center"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        margin={"auto"}
                        width={400}
                        height={400}
                    >
                        {signup && <>
                            <FormLabel sx={{ display: "flex", justifyContent: "start", width: "300px", marginBottom: "0px" }}  >Name</FormLabel>
                            <TextField variant='standard' sx={{ width: "300px", marginBottom: "10px" }} width="100%" type="name" name='name'onChange={handleChange}
                            value={inputs.name}
                             />
                        </>}

                        <FormLabel sx={{ display: "flex", justifyContent: "start", width: "300px", marginBottom: "10px" }}  >Email</FormLabel>
                        <TextField variant='standard' sx={{ width: "300px", marginBottom: "10px" }} width="100%" type="email" name='email' onChange={handleChange}value={inputs.email} />

                        <FormLabel sx={{ display: "flex", justifyContent: "start", width: "300px", marginBottom: "10px" }} >Password</FormLabel>
                        <TextField sx={{ width: "300px", marginBottom: "20px" }} variant='standard' type="password" name='password'onChange={handleChange}value={inputs.password} />

                        <Button    type='submit'>{signup ? "Register" : "signup"}</Button>

                        {!isAdmin && <Button onClick={() => setSignup(!signup)}>Switch {signup ? "login" : "signup"}</Button>}
                    </Box>

                </form>
            </Dialog>
        </div>
    )
}


//