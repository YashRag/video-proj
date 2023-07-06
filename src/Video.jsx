import React from 'react'

const Video = ({videoSrc}) => {
  return (
    <div>
      <video loop controls autostart="false" autoPlay unmuted src={videoSrc} />
    </div>
  )
}

export default Video
