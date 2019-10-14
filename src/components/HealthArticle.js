import React from "react"
import health from "../images/health.jpg"

export default class HealthArticle extends React.Component {
    render(){
        return(
            <div>
            <h1>HealthArticle</h1>
            <img src={health} alt=""></img>
            </div>
        )
    }
}