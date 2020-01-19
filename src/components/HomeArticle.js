import React from "react"
import home from "../images/home.jpg"

export default class HomeArticle extends React.Component {
    render(){
        return(
            <div>
            <h1>Creating Spaces</h1>
            <img style={{width: 700}} src={home} alt=""></img>
            </div>
        )
    }
}