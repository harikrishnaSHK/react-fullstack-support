import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"

const PrivateRouter = () =>{



const {isLoggedIn} = useAuthStatus()

console.log(isLoggedIn)



return(

    <Fragment>


{isLoggedIn ?  <Outlet></Outlet>: <h1>Please login First </h1>}

    </Fragment>
)

}


export default PrivateRouter