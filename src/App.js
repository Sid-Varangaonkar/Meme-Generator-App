import React from "react"
import  ReactDOM  from "react-dom"
import Header from "./component/Header"
import Icon from "./component/icon.jpg"
import A from "./component/unnamed.png"
import Meme from "./component/Meme"
// import Unnamed from "../public/unnamed.png"



function App()
{
    return (
        <div>
            
            <Header/>
            <div>
            
            {/* <img src={A} alt="no" height="110vh"></img>
            <img src={Icon} alt="no" height="110vh"></img> */}
            
            
            </div>
            <Meme/>

        </div>
    )
}

export default App