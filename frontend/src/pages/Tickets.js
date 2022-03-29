import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTickets,reset } from "../features/ticket/ticketSlice"
import TicketItem from "./TicketItem"

const Tickets  = ()=>{

const {tickets,isLoading,isSucess} = useSelector(state=>state.tickets)
console.log(tickets)
const dispatch = useDispatch()

useEffect(()=>{

console.log("coming in tickets")

    dispatch(getTickets())
},[dispatch])

if(isLoading){
    return(<h1>Loading the data</h1>)
}

else{

    return(

        <Fragment>
        
        <h1>Ticktes</h1>
        <div className="tickets">
           <div className="ticket-headings">

           <div>Date</div>
           <div>description</div>
           <div>Status</div>

           </div>
      {tickets.map(ticket=>(<TicketItem key={ticket._id} ticket ={ticket}></TicketItem>))}
        </div>
        
       
        
        </Fragment>
        )

}




}

export default Tickets