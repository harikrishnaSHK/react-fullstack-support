
import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../features/auth/authSlice"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom"
import {reset} from "../features/auth/authSlice"

const Login = () =>{

  const navigate = useNavigate()

  const dispatch = useDispatch()

 const {user,
 isError,
 isSucces,
 isLoading,
 message} = useSelector(state=>state.auth)   


 useEffect(()=>{

 if(isError){

toast.error(message)

 }

 if(isSucces){

toast.success(message)
navigate('/')

 }

 dispatch(reset())


 },[isError,isLoading,isSucces,message,dispatch,user,navigate])


 




const [formData,setFormData] = useState({


email:'',
password:'',


}

)

const {email,password} = formData


const onChange =(e) =>{
e.preventDefault()
setFormData((prevState)=>({...prevState,[e.target.name]:e.target.value}))


}

const onSubmit = (e) =>{
    e.preventDefault()

 const userData= {

email,
password

 }

 console.log(userData)

 dispatch(login(userData))




    }

 








    return(

      <Fragment>
    <section className="heading">
   <h1>Login Here </h1>
   <p>Please enter your Login details below </p>


    </section>
    <section className="form">
        <form onSubmit={onSubmit}>


        <div className="form-group">

   <input type ="text" className="form-control" required name ="email" id="email" value={email} placeholder ="Enter your password here"  onChange={onChange}></input>

        </div>

        
        <div className="form-group">

   <input type="password" className="form-control" required name ="password" id="password" value={password} placeholder ="Enter your password here"  onChange={onChange}></input>

        </div>

<button className="btn btn-block">Login</button>

        </form>

 

    </section>



      </Fragment>
        
        )

}

export default Login