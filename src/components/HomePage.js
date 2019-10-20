import React from 'react'
import travel from "../images/travel.jpg"
import health from "../images/health.jpg"

export default class HomePage extends React.Component {
    render(){
        return(
            <div>
            <h1>Where She Got It</h1>
            <img style={{width: 300, height: 300 }}src={travel} alt=""></img> <img style={{width: 300, height: 300 }}src={health} alt=""></img>
            
            </div>
        )
    }
}