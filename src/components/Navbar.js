import React from "react"
import logo from '../NBlogoX.png'


export default function Navbar(props){
    
   return (
       <nav className="nav--bar"> 
           <img src={logo} alt="logo image" className="nav--logo" />
           <h1>NewsBeep</h1>

       </nav>
   )
    
}