import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout,reset } from "../features/auth/authSlice"

const Header = () =>{

   const dispatch = useDispatch()
   const navigate = useNavigate() 

 const {user} = useSelector(state=>state.auth)  
 const userName = localStorage.getItem('user') 
 console.log(user)

 const onLogout =() =>{

    dispatch(logout())
    dispatch(reset())
    navigate('/')


 }

return(

<Fragment>
<header className="header">

<div className="logo">

<Link to ="/" style={{fontSize:"20px",color:"#A569BD"}}>Attainu Support Desk</Link>

</div>

{ !userName ? 
(<Fragment><ul>

<li><Link to ="/login">Login</Link></li>

<li><Link to ="/register">register</Link></li>

</ul></Fragment>)
:
(<Fragment><ul>
<li><button className="btn"  onClick={onLogout}>Logout</button></li>
</ul></Fragment>)
}




</header>



</Fragment>

)

}


export default Header