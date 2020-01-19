import React from "react"
import travel from "../images/travel.jpg"

export default class TravelArticle extends React.Component {
    render(){
        return(
            <div>
            <h1>Travel as Often as You Like</h1>
            <img src={travel} alt=""></img>
            </div>
        )
    }
}