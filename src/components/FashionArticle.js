import React from "react"
import jeans from "../images/jeans.jpg"

export default class FashionArticle extends React.Component {
    render(){
        return(
            <div>
            <h1>FashionArticle</h1>
            
            <img src={jeans} alt="girl in jeans"></img>
            </div>
        )
        
    }

}

