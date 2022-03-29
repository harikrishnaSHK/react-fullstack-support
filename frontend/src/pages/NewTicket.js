
import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { reset,createTicket } from "../features/ticket/ticketSlice"


const NewTicket = () => {

const {user} = useSelector(state=>state.auth)
console.log(user)
const dispatch = useDispatch()
const navigate = useNavigate()
const {isLoading,isError,isSucess,message} = useSelector(state=>state.tickets)
console.log(isLoading,isError,isSucess,message)
const [name,setName] = useState(user.name)
const [email,setEmail] = useState(user.email)
const [description,setDescription] =useState('')

useEffect(()=>{
if(isError){

toast.error(message)

}
if(isSucess){
toast.success("created the ticket sucessfully")
dispatch(reset())


}

},[dispatch,navigate,isError,isSucess,message])



    const onSubmit = (e) => {


console.log("coming here after submit")
  e.preventDefault()
  dispatch(createTicket({description}))
  dispatch(reset())
  navigate('/')
 


     }
    return (

        <Fragment>

            <section className="heading">
                <h1>Hi Students You can Raise your ticets here</h1>
                <p>Please enter the details below</p>
            </section>

            <section className="form">
                <div className="form-group">
                    <label htmlFor="name">Student Name </label>
                    <input type="text" className="form-control" value={name} disabled></input>

                </div>

                <div className="form-group">
                    <label htmlFor="email">Student Email </label>
                    <input type="text" className="form-control" value={email} disabled></input>

                </div>

                <form onSubmit={onSubmit}>
                    <div className="form-group">

                        <label htmlFor="description">Description</label>
                        <textarea name="description" id ="description" value={description} placeholder="pleae enter your issue here"
                        onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                    </div>
                    <div className="form-group">

                        <button className="btn btn-block">Submit</button>
                    </div>

                </form>
            </section>

        </Fragment>

    )

}


export default NewTicket