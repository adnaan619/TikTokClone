import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/FavoriteBorder';


function VideoFooter() {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'></div>
        <h3>@adnaanfuard</h3>
        <p>this is a description</p>
        <MusicNoteIcon/>
        <img className="videoFooter__record" src=""></img>
    </div>
  )
}

export default VideoFooter;