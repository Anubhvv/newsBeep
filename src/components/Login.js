import React from "react"
import Feed from "./Feed"
import ReactDOM from "react-dom"

export default function Login(props){

    const loginElement= (
        <div>
            <h1>Login to acccess newsBeep</h1>
            <div>
                <input placeholder="email"></input>
                <input type="password"></input>
                <button onClick={props.handleLoginSubmit}>login</button>
            </div>
        </div>
    )
    if(props.showLogin)
    return loginElement
    else return(<div></div>)
}