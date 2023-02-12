import { Navigate, Outlet } from "react-router-dom"
import React from "react"
import {useAuth} from "../../hooks/useAuth";

const PrivateRoutes = () => {
  const isAuth = useAuth()
  return isAuth ? <Outlet/> : <Navigate to="/" />
}

export default PrivateRoutes