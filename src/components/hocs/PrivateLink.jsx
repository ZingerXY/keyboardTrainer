import React from "react"
import {useAuth} from "../../hooks/useAuth";

const PrivateLink = ({children}) => {
  const isAuth = useAuth()

  return isAuth ? children : null
}

export default PrivateLink