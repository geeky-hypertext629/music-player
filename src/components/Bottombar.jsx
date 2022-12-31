import React, { useState } from 'react'
import Currentsong from './Currentsong'
import Playing from "./Playing";
import Songlist from "./Songlist";



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
