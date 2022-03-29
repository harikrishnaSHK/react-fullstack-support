
import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { getTicket,reset,closeTicket} from "../features/ticket/ticketSlice"
const Ticket = ()=>{

const dispatch = useDispatch()
const  params = useParams()
const navigate = useNavigate()
const {ticket,isloading,isError,message,isSucess} = useSelector(state=>state.tickets)
const {ticketId} = useParams()
console.log(ticket)

useEffect(()=>{

if(isError){
    toast.error(message)
}
dispatch(getTicket(ticketId))


},[message,ticketId,isError])

const closeTickets = ()=>{
dispatch(closeTicket(ticketId))

}


if(isloading){

<h1>Loading the data</h1>

}

else{
    return(
   
  <Fragment>

 <div className="ticket-page">

<header className="ticket-header">
    <h1>TicketId :{ticketId}</h1>
    <h2>status : {ticket.status}</h2>
    <hr></hr>
    <div className="ticket-desc">
        <h1>Description</h1>
        <p>{ticket.description}</p>
    </div>
</header>
{ticket.status!=='closed' && <button className="btn btn-block" onClick={closeTickets}>Close Ticket</button>}

 </div>

  </Fragment>
   
    )}



}

export default Ticket