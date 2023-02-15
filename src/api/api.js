import axios from 'axios'

export const getAllMovies = async () => {
    const res = await axios.get("http://localhost:2002/movies").
        catch((err) => console.log(err))

    if (res.status !== 200) {
        return console.log("No data")
    }

    const data = await res.data;
    return data
}

export const  sendUser=async(data,signup)=>{
const res=await axios.post(`http://localhost:2002/auth/${signup ? "reg":"login"}`,{
        name:signup ? data.name : "",
        email:data.email,
        password:data.password
    }).catch((err)=>console.log(err))

    if(res.status!==200 && res.status!==201){
        console.log("Error")
    }
    const resData = await res.data
    return resData

}

export const  sendAdmin=async(data)=>{
    const res=await axios.post("http://localhost:2002/admin/login",{
            email:data.email,
            password:data.password
        }).catch((err)=>console.log(err))
    
        if(res.status!==200 ){
           return  console.log("Error")
        }
        const resData = await res.data
        return resData
    
    }

    export const getMovie = async (id) => {
        const res = await axios.get(`http://localhost:2002/movies/${id}`).
            catch((err) => console.log(err))
        // if (res.status != 200) {
        //     return console.log("No data")
        // }
    
        const data = await res.data;
        return data
    }

    export const getUserBooking = async () => {
        const id =localStorage.getItem("userId")
        const res = await axios.get(`http://localhost:2002/booking/${id}`).
            catch((err) => console.log(err))
        if (res.status != 200) {
            return console.log("No data")
        }
    
        const data = await res.data;
        return data
    }

    export const newBooking = async (inputs) => {
        const res = await axios.post(`http://localhost:2002/booking`,{
            SeatNumber:inputs.SeatNumber,
            date:inputs.date,
            user:localStorage.getItem("userId")
        }).then((res)=>console.log(res)).catch((err)=>console.log(err))
      
    
        const data = await res.data;
        return data
    }

    export const AddMovie = async (input) => {
        const res = await axios.post(`http://localhost:2002/movies`,{
            title:input.title,
            description:input.description,
            poster_url:input.poster_url,
            actors:input.actors,
            releaseDate:input.releaseDate,
            admin:localStorage.getItem("adminId")
        },{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }
        
        
        ).then((res)=>console.log(res)).catch((err)=>console.log(err))
      
    
        const data = await res.data;
        return data
    }

    export const getUser = async () => {
        const id =localStorage.getItem("userId")
        const res = await axios.get(`http://localhost:2002/user/profile/${id}`).
            catch((err) => console.log(err))
        if (res.status != 200) {
            return console.log("No data")
        }
    
        const data = await res.data;
        return data
    }