import { Fragment } from "react"
import { Link } from "react-router-dom"

const TicketItem = ({ticket})=>{


    return(<Fragment>

   <div className="ticket">
   <div>{new Date(ticket.createdAt).toLocaleDateString('en-US') }</div>
   <div> {ticket._id}</div>
   <div> {ticket.status}</div>
   <Link className="btn btn-reverse" to={`/view-tickets/${ticket._id}`}>View Ticket</Link>


   </div>


    </Fragment>)
}


export default TicketItem