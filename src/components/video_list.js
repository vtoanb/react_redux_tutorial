import React from 'react';

const VideoList = (props) => {
  return(
    <div>
      <h1>We have {props.videos.length} videos</h1>
      <ul className="col-md-4">
        {props.videos.length}
      </ul>
    </div>
  )
}

export default VideoList