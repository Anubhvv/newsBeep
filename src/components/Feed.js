import React from "react"


export default function Feed(props){
    
    const feedElement=(    
    <div>
        <h3>Aaj ki taza khabar</h3>
        <ul>
            <li>road block</li>
            <li>china export</li>
            <li>bihar topper</li>
            <li>omicron spreading like wildfire</li>
        </ul>
    </div>
    )
    if(props.showFeed)
        return feedElement
    else return (<div></div>)
    
}