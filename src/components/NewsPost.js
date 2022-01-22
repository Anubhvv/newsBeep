import React from "react"

export default function NewsPost(props) {
    return (
        <div className="newscard">
            <img src={props.img}/>
            <b>{props.title}</b>
            <small>{props.source}</small>
        </div>
    )
}