import React from "react"

export default function LandingPage(props){

    const landingPageElement=(
        
        <div>
            <h2>Welcome to NewsBeep,  to continue:</h2>
            <button onClick={props.handleCreateAccount}>Create Account</button>
            <button onClick={props.handleLogin}>Log-In</button>
        </div>
    )

    if(props.showLandingPage)
    return landingPageElement
    else return (<div></div>)
}
