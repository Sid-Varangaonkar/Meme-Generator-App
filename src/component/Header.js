import React from "react"
import ReactDOM from "react-dom"
import Icon from "./icon.jpg"
import A from "./unnamed.png"


function Header()
{
    return(
        <div className="Header">
            <nav className="nav">
                <div className="abc">
            <img scr={A} alt="hi" height="100vh" ></img>

        <h1> Meme Generator</h1>
        
        </div>
        <h1>By: - Siddharth Varangaonkar</h1>
        </nav>
        </div>
      
    )
}

export default Header