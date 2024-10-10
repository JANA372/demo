import React from 'react'
import './Body.css'
import Img from './image.jpg'
import Luffy from './luffy.jpg'
const StateHandle = () => {
  const [image,setImage]=useState(Img)
  const changer=function(){
    setImage(Luffy)
  }
  return (
    <div>
      <img src={image} alt="Image" onMouseEnter={changer}/>
    </div>
  )
}

export default StateHandle
