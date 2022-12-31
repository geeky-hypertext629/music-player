import React from 'react'
import { useState } from 'react';
import song1 from "./unstoppable.mp3"
import song2 from "./Aayat.mp3"
import song3 from "./kgf2.mp3"
import song4 from "./stereo.mp3"
import song5 from "./oned.mp3"


const songsList=[song1,song2,song3,song4,song5];
let i=0;
let audio = new Audio(songsList[i]);

export default function Playing(props) {

    const [status, setStatus] = useState(false);


    function playMusic(){
        if(status===false)
        {
            audio.play();
        }
        else
        {
            audio.pause();
        }
        setStatus(!status);
        props.songNo(i);
    }
    
    
    function playNext(){
        audio.pause();
        setStatus(false);
        i=(i+1)%5;
        audio=new Audio(songsList[i]);
        audio.play();
        setStatus(true);
        props.songNo(i);
        
    }
    
    function playPrev(){
        audio.pause();
        setStatus(false);
        i=i-1;
        if(i<0)
        i=4;
        audio=new Audio(songsList[i]);
        audio.play();
        setStatus(true);
        props.songNo(i);
    }


  return (
    <div className='play-section'>
    <div className="controls">
    <button className="previous" onClick={playPrev}>
    <i class="fa-solid fa-backward"></i>
    </button>
    <button className="play" onClick={playMusic}>
    <i class={status ? "fa-solid fa-pause" : "fa-solid fa-play"}></i>
    </button>
    <button className="next" onClick={playNext}>
    <i class="fa-sharp fa-solid fa-forward"></i>
    </button>
    </div>
    </div>
  )
}
