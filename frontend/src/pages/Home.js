import { Fragment } from "react"
import { Link } from "react-router-dom"

const Home = () =>{


    return(

       <Fragment>

<section className="heading">

<h1>Welcom to Attainu Support Team</h1>
<p>You can view or create a ticket from here</p>
<br></br>
<br></br>

<Link to = '/new-ticket' className="btn btn-reverse">create new ticket</Link>

<br></br>
<Link to = '/view-tickets' className="btn btn-block">View Tickets</Link>

</section>


       </Fragment>
        
        )
}


export default Home