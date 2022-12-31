import React from 'react';
import Album from './Album';

export default function Main() {
  return (
    <div className='main-section'>
        <div className="good-evening">
        <h1>Good Evening</h1>
        </div>
        <br />
        <br />
        <div className="albums">
        <Album albumurl="https://i.scdn.co/image/ab67706c0000da84ff82f5452201777af856406e" name="Stranger Things"/>
        <Album albumurl="https://i.scdn.co/image/ab67706c0000da84b79ab21ed591789e0cbcb648" name="KGF2 Hindi Songs All BGM"/>
        <Album albumurl="https://wrapped-images.spotifycdn.com/image/yts-2022/default/your-top-songs-2022_default_en.jpg" name="Your Top Songs 2022"/>
        <Album albumurl="https://i.scdn.co/image/ab67616d00001e027d46ff19532fdba734bfd4e0" name="Pathaan Songs"/>
        <Album albumurl="https://mosaic.scdn.co/640/ab67616d00001e021563e3ab78422f323f54c57fab67616d00001e0246b1b675145743583384dc24ab67616d00001e0274ebc9108383c4e7206b0b79ab67616d00001e028e8a4ff404b4fd931a4c3152" name="Random"/>
        <Album albumurl="https://i.scdn.co/image/ab67616d00004851cd7493de7a51fc0e3ca309c9" name="Bajirao Mastani"/>
        </div>
    </div>
  )
}
