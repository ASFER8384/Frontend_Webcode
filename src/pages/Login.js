import React from 'react'
import { getAllMovies, sendUser } from '../api/api'
import Authform from '../Components/Auth/Authform'
import { useDispatch } from "react-redux"
import { userAction } from '../store'

export default function Login() {
  const dispatch = useDispatch()

  const onreceived = (data) => {
    console.log(data)
    dispatch(userAction.login())
    localStorage.setItem("userId", data._id)
  }

  const getData = (data) => {
    console.log("Auth", data)
    sendUser(data.inputs, data.signup)
      .then(onreceived)
      .then((res) => console.log(res)).catch
      ((err) => console.log(err))
  }

  return (
    <div>
      <Authform onSubmit={getData} isAdmin={false} />
    </div>
  )
}
