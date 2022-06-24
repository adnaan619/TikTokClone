import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/FavoriteBorder';


function VideoFooter() {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
          <h3>@adnaanfuard</h3>
          <p>this is a description</p>
          <div className='videoFooter__ticker'>
            <MusicNoteIcon className="videoFooter__icon"/>
            <Ticker mode="smooth">
                {({ index }) => (
                    <>
                        <p>YOo whats up guys</p>
                    </>
                )}
            </Ticker>
          </div>  
        </div>
        <img 
            className="videoFooter__record" 
            src="https://static.thenounproject.com/png/"  alt=""></img>
    </div>    
  );
}

export default VideoFooter;