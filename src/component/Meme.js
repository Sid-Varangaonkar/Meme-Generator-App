import React from "react"
import  ReactDOM  from "react-dom"
import A from "./memesData"



// now we will focus on adding event listener to our button
// to add a event listener we add attribute onClick={} to the button

//  inside {} we describe our js function
function Meme()
{


// now we will use side effect totake the data from api for the iamges
const [allMemeImages,allMemeImagesfunc]=React.useState({})
// const [allMemeImages,allMemeImagesfunc]=React.useState(A)

React.useEffect(()=>{
    // async function in rect
    // async function getmemes()
    // {
    //     const res=await fetch("https://api.imgflip.com/get_memes")
    //     const data=await res.json()
    //     allMemeImagesfunc(data)
    // }
    // getmemes()

    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>allMemeImagesfunc(prev=>data))
},[])

// **
    // using an object inside a state
const [object,objectFunction]=React.useState({
    name:"sid",
    age:1,
    no:"103220170",
isfav:true
}) 

function toggleFav()
{
    objectFunction(prevContent=> {
        return  {
            ...prevContent,
            isfav: !prevContent.fav
        }
    })
}

// ... spread opeartor return the previos object
// we will now use state to change only the isfav


// now we will see how to update state when state is an object

// use of ternery operator to chhange the url

// const starIcon=object.star?"star-fitted.png":"star-less.png"

// in the image source then we can provide this starIcon as src


    function handleclick()
    {
         (console.log("I was clicked"))
    }
    function mouse()
    {
    //     const memeArray=A.data.memes
    //     const randomNumber=Math.floor(Math.random()*memeArray.length)
    //    console.log(randomNumber)
    console.log("mouse hovered")
    }
    let url

    // its we will display random link as event handler
// state is used to change the state when any update is fone the update will be reflected


// diff of state and prop
// state refers to any values that are managed by the components and they change the value
// when values are changed we use state 


// reat doesn't walk for local variable changes


// to display the image we will use a link meme image


const [memeImage,getMemeImage]=React.useState(1)
console.log(memeImage)

const [meme,memeFunc]=React.useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imageflip.com/1bij.jpg"

})
// const memeArray=A.data.memes


// now we will take the value of topText and bottomText from the form

// where a is meme data file


    function Memegenerator()
    { 
        const memeArray=allMemeImages.data.memes
        const randomNumber=Math.floor(Math.random()*memeArray.length)
       url=memeArray[randomNumber].url
       console.log(url)
        
        console.log("meme is generated")

        getMemeImage(url)
        memeFunc(prevcontent =>{
            return{
                ...prevcontent,
                randomImage: url
            }
        })
       
    }

    function handleChange(event)
    {
        const {name,value}=event.target
        memeFunc(prevContent=>
            {
           return{
                ...prevContent,
                [name]:value
        }
    } 
        )

    }
    return(
        <div className="Main">
            {/* we will make the use of grid */}
            {/* <p>{url}</p> */}
            <div className="form">
                <input type="text" placeholder="top text" className="form-input"
                value={meme.topText}
                onChange={handleChange}
                name="topText"
                
                ></input>
                <input type="text" placeholder="bottom text" className="form-input"
                onChange={handleChange}
                name="bottomText"
                value={meme.bottomText}></input>


                {/* <button onClick={console.log("hi")} className="form-button">Get a new meme image</button> */}
                {/* in passing the function don't pass () toit just write the function name */}
                <button onClick={Memegenerator} onMouseOver={mouse} className="form-button">Get a new meme image</button>
                <div className="ImagePositioning">
                <img src={meme.randomImage} className="memeImage" ></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
                {/* we can call the object of the state like */}
                {/* <h1>{object.name}</h1> */}
            </div>
        </div>
    )
}

export default Meme