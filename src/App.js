import Header from "./Components/Header/Header";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Movies from "./pages/Movies.js"
import Admin from "./pages/Admin.js"
import Login from "./pages/Login.js"
import Homepage from "./Components/Homepage/Homepage";
import { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { adminAction, userAction } from "./store";
import Footer from "./Components/Footer/Footer";
import Movie from "./pages/Movie";
import Booked from "./pages/Booked";
// import Selection  from './Components/Dummy/Dummy.js'
import Profile from "./pages/Profile";
import Addmovies from "./pages/Addmovies";


function App() {
  const [closee,setClosee]=useState(false)
const isadminLoggedin = useSelector((state)=>state.admin.isLoggedin)
const isuserLoggedin = useSelector((state)=>state.user.isLoggedin)

console.log("isadminLoggedin",isadminLoggedin)
console.log("isuserLoggedin",isuserLoggedin)
const dispatch = useDispatch()

useEffect(()=>{
  if(localStorage.getItem("userId")){
    dispatch(userAction.login())
  }else if(localStorage.getItem("adminId")){
dispatch(adminAction.login())
}
},[])


  return (
    <div >
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/movies" element={<Movies/>}/>
     
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/login" element={<Login />}/>
        
        {isuserLoggedin && !isadminLoggedin && 
        <>
         <Route path="/booking/:id" element={<Movie />}/>
        </>}
        {isadminLoggedin && !isuserLoggedin && 
        <>
              <Route path="/addmovie" element={<Addmovies />}/>
        </>}
        
        <Route path="/profile" element={<Profile />}/>
        <Route path="/booked" element={<Booked />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
