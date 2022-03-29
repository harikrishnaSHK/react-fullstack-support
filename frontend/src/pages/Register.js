import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../features/auth/authSlice"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom"
import { reset } from "../features/auth/authSlice"

const Register = () =>{

 const dispatch = useDispatch()   
 const navigate = useNavigate()
 const {user,isError,isSucces,isLoading,message} = useSelector(state=>state.auth)

const [formData,setFormData] = useState({

name:'',
email:'',
password:'',
password2:'',

}

)

useEffect(()=>{

if(isError){

toast.error(message)

}

if(isSucces){
     toast.success(message)

     navigate('/login')
}

dispatch(reset())



},[isError,isLoading,isSucces,user,message,navigate,dispatch])

const {name,email,password,password2} = formData


const onChange =(e) =>{
e.preventDefault()
setFormData((prevState)=>({...prevState,[e.target.name]:e.target.value}))


}

const onSubmit = (e) =>{
    e.preventDefault()
    if(password!==password2){

  alert("passwords doesnt match")

    }
    else{
 const userData= {
name,
email,
password

 }

 console.log(userData)

 dispatch(register(userData))





    }

 

}






    return(

      <Fragment>
    <section className="heading">
   <h1>Register Here</h1>
   <p>Please enter your details below </p>


    </section>
    <section className="form">
        <form onSubmit={onSubmit}>

        <div className="form-group">

   <input type="text" className="form-control" required name ="name" id="name"  value={name} placeholder ="Enter your name here" onChange={onChange}></input>

        </div>

        <div className="form-group">

   <input type ="text" className="form-control" required name ="email" id="email" value={email} placeholder ="Enter your email here"  onChange={onChange}></input>

        </div>

        
        <div className="form-group">

   <input type="password" className="form-control" required name ="password" id="password" value={password} placeholder ="Enter your password here"  onChange={onChange}></input>

        </div>

        <div className="form-group">

   <input type ="password" className="form-control" required name ="password2" id="password2" value={password2} placeholder ="Enter your confirm password here"  onChange={onChange}></input>

        </div>

<button className="btn btn-block">Register</button>

        </form>

 

    </section>



      </Fragment>
        
        )

}

export default Register