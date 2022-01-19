import React from "react"

export default function CreateAccount(props){
    const createAccountElement=(
            <div>
                <h2>Fill details to create acc:</h2>
                <input placeholder="FirstName"></input>
                <input type="date" placeholder="Date of birth"></input>
                <input placeholder="e-mail" type="email"></input>
                <input placeholder="password" type="password"></input>
                <button>Create My Account</button>
                
            </div>)
    if(props.showCreateAccount)
    return createAccountElement;
    else return (<div></div>)
    
}