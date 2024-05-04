import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRoutes() {
    const {user, login, isLoading, isAuthenticated} = useKindeAuth()

    console.log(isAuthenticated)
    console.log(user)

    if(isLoading){
        return <div>Loading...</div>
    }

    if(!isLoading && !isAuthenticated){
        login()
    }

    if(isAuthenticated){
        return <Outlet/>
    }

    // const user = null
    // return user ?  : 
}
