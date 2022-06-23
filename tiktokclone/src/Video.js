import React, { useRef } from 'react';
import './Video.css';
import VideoFooter from "./VideoFooter";


function Video() {
    const [playing, setPlaying] = useState(false);
    const vidoeRef = useRef(null);

    const onVideoPress = () => {
        if (playing){
          videoRef.current.pause();
          setPlaying(false);
        } else{
          videoRef.current.play();
          setPlaying(true);
        }
    }
  return (
    <div className="video">
        <video 
          className="video__player" 
          loop
          onClick={onVideoPress}
          ref={videoRef}
          src="https://v16-webapp.tiktok.com/12b018e0a09b48c5af956dc45d5be93f/62b3b9d3/video/tos/useast2a/tos-useast2a-pve-0037-aiso/04f124a3961e4d1e9106b4856f3c2d59/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2794&bt=1397&btag=80000&cs=0&ds=3&ft=eXd.6HNVMyq8ZG7IZwe2N9PQml7Gb&mime_type=video_mp4&qs=0&rc=PDRnZ2Q0OWQ3aTs0NjVpPEBpM3BnNTM6Zjw8ZDMzZjczM0A0YzNeYmMwX18xNDViMV9jYSNvNC82cjQwa2pgLS1kMWNzcw%3D%3D&l=202206221853580102452431360800F6A1"></video>
        <VideoFooter />
        {/* <VideoSidebar/> */}
    </div>

  );
}

export default Video
