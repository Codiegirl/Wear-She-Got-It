import React from "react"
import jeans from "../images/jeans.jpg"

export default class FashionArticle extends React.Component {
    render(){
        return(
            <div>
            <h1>Fall for Denim</h1>
            
            <img style={{width: 700, height: 700 }}src={jeans} alt="girl in jeans"></img>
            <p> Here's why denim is always in season</p>
            </div>
        )
        
    }

}

