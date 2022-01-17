import React from "react"
import Feed from "./Feed"
import ReactDOM from "react-dom"

function verify(){
    //verified by def
    ReactDOM.unmountComponentAtNode(<Login />); 
}

export default function Login(){
    return (
        <div>
            <h1>Login to acccess newsBeep</h1>
            <form>
                <input placeholder="email"></input>
                <input type="password"></input>
                <button onClick={verify}>login</button>
            </form>
        </div>
    )
}