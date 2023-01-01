import React, { useEffect } from 'react'
import { useState } from 'react';
import song1 from "./unstoppable.mp3"
import song2 from "./Aayat.mp3"
import song3 from "./kgf2.mp3"
import song4 from "./stereo.mp3"
import song5 from "./oned.mp3"


const songsList = [song1, song2, song3, song4, song5];
const timeofsong=[4.06,4.22,3.03,2.33,4.01];
let i = 0;
let x=0;
let audio = new Audio(songsList[i]);
let progress=0;
let songtime=0;
let t1=0;

export default function Playing(props) {

    const [status, setStatus] = useState(false);
    const [timeline,settimeline] = useState(0);
    const [currvolume, setvolume] = useState(1);
    const [currtime,setcurrtime] = useState(0.00);

    function playMusic() {
        if (status === false) {
            audio.play();
            progress=setInterval(()=>{
                x=x+(100/(timeofsong[i]*60));
                settimeline(x);
            },1000);
            songtime=setInterval(()=>{
                t1=t1+0.01;
                setcurrtime(t1);
            },1000);
        }
        else {
            audio.pause();
            clearInterval(progress);
            clearInterval(songtime);
        }

        setStatus(!status);
        props.songNo(i);
    }


    function playNext() {
        audio.pause();
        setStatus(false);
        i = (i + 1) % 5;
        clearInterval(progress);
        x=0;
        settimeline(0);
        progress=setInterval(()=>{
            x=x+(100/(timeofsong[i]*60));
            settimeline(x);
        },1000);

        clearInterval(songtime);
        t1=0;
        setcurrtime(t1)
        songtime=setInterval(()=>{
            t1=t1+0.01;
            setcurrtime(t1);
        },1000);

        audio = new Audio(songsList[i]);
        audio.play();
        setStatus(true);
        props.songNo(i);

    }

    function playPrev() {
        audio.pause();
        setStatus(false);
        i = i - 1;
        if (i < 0)
        i = 4;
        x=0;
        clearInterval(progress);
        settimeline(0);
        progress=setInterval(()=>{
            x=x+(100/(timeofsong[i]*60));
            settimeline(x);
        },1000);
        clearInterval(songtime);
        t1=0;
        setcurrtime(t1)
        songtime=setInterval(()=>{
            t1=t1+0.01;
            setcurrtime(t1);
        },1000);
        audio = new Audio(songsList[i]);
        audio.play();
        setStatus(true);
        props.songNo(i);
    }
    function volumeTrigger(e) {
        setvolume(e.target.value);
    }
    useEffect(()=>{
        audio.volume = currvolume / 100;   
        },[currvolume]);

    function updatetimeline(e){
        settimeline(e.target.value);
        console.log(timeline);
    }

    return (
        <div className='play-section'>
            <div className="controls">
            <div>
                <button className="previous" onClick={playPrev}>
                    <i class="fa-solid fa-backward"></i>
                </button>
                <button className="play" onClick={playMusic}>
                    <i className={status ? "fa-solid fa-pause" : "fa-solid fa-play"}></i>
                </button>
                <button className="next" onClick={playNext}>
                    <i class="fa-sharp fa-solid fa-forward"></i>
                </button>
                </div>
                <div className="progressbar">
                <p>{currtime.toFixed(2)}</p>
                    <input type="range" min="0" max="100" value={timeline} onChange={updatetimeline}/>
                    <p>{timeofsong[i]}</p>
                </div>
            </div>
            <div className='volume'>
                <p>Volume</p>
                <input type="range" id="volume" name="volume" 
                    min="0" max="100" value={currvolume} onChange={volumeTrigger} />
            </div>
        </div>
    )
}
