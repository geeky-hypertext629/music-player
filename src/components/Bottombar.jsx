import React, { useState } from 'react'
import Currentsong from './Currentsong'
import Playing from "./Playing";
import Songlist from "./Songlist";
import song1 from "./unstoppable.mp3"
import song2 from "./Aayat.mp3"
import song3 from "./kgf2.mp3"
import song4 from "./stereo.mp3"
import song5 from "./oned.mp3"


const songsList=[song1,song2,song3,song4,song5];

export default function Bottombar(index) {

  const [playingSong,setPlayingSong] = useState(Songlist[0]);

  function songDisplay(index)
  {
    setPlayingSong(Songlist[index]);
  }

  return (
    <div className='bottomBar'>
    <Currentsong urlsong={playingSong.songUrl}
        title={playingSong.songTitle}
        details={playingSong.songDetails}
    />
    <Playing songNo={songDisplay}/>
    </div>
  )
}
