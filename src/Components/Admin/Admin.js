import React from 'react'
import { sendAdmin } from '../../api/api'
import Authform from '../Auth/Authform'
import {useDispatch} from "react-redux"
import { adminAction } from '../../store'

export default function AdminComp() {
  const dispatch = useDispatch()

  const onreceived=(data)=>{
    console.log(data)
dispatch(adminAction.login())
localStorage.setItem("adminId",data.id)
localStorage.setItem("token",data.token)
  }

  const getData =(data)=>{
    console.log("Admin",data)
    sendAdmin(data.inputs)
    .then(onreceived)
    .catch((err)=>{
      console.log((err))
    })
   }

  return (

    <div>
      <Authform onSubmit={getData} isAdmin={true}/>
    </div>
  )
}
