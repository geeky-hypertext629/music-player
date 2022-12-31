import React from 'react'
import Logo from './Logo'
import Navoptions from './Navoptions';
export default function Sidebar() {

    const logourl="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png";

  return (
    <div className="sidebar">
        <Logo imgUrl={logourl}/>
        <Navoptions url="fa-solid fa-house" name = "Home" />
        <Navoptions url="fa-regular fa-bookmark" name = "Search" />
        <Navoptions url="fa-solid fa-headphones-simple" name = "Your library" />
        <br />
        <br />
        <Navoptions url="fa-brands fa-playstation" name = "Create Playlist" />
        <Navoptions url="fa-solid fa-heart" name = "Linked songs" />
    </div>
  )
}
