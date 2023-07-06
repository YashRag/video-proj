import React from 'react'

const Menu = ({onSelectVideo, videoValues}) => {
  console.log(videoValues)
  return (
    <form onClick={(event)=>onSelectVideo(event.target.value)}>
        {videoValues.map((value,index)=>(
            <div className="video-inputs" key={index}>
        <input  type="radio" name="src" value={value}/>
          {value}
          </div>
))}
    </form>
  )
}

export default Menu
