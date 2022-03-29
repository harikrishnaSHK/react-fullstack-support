import React, { Fragment } from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from './Components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewTicket from './pages/NewTicket';
import PrivateRouter from './Components/PrivateRouter';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';

function App() {
  return (
<Fragment>

<BrowserRouter>
<div className="container">
<Header></Header>
<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/login' element ={<Login></Login>}></Route>
<Route path='/register' element={<Register></Register>}></Route>
<Route path='/new-ticket' element={<PrivateRouter></PrivateRouter>}>

 <Route path='/new-ticket' element={<NewTicket></NewTicket>}></Route>
</Route>

<Route path='/view-tickets' element={<PrivateRouter></PrivateRouter>}>

 <Route path='/view-tickets' element={<Tickets></Tickets>}></Route>
</Route>
<Route path='/view-tickets/:ticketId' element={<PrivateRouter></PrivateRouter>}>

 <Route path='/view-tickets/:ticketId' element={<Ticket></Ticket>}></Route>
</Route>

</Routes>


</div>
<ToastContainer></ToastContainer>

</BrowserRouter>




</Fragment>
  );
}

export default App;
