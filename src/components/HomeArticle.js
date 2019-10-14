import React from "react"
import home from "../images/home.jpg"

export default class HomeArticle extends React.Component {
    render(){
        return(
            <div>
            <h1>HomeArticle</h1>
            <img src={home} alt=""></img>
            </div>
        )
    }
}