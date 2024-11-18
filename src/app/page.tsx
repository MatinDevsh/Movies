'use client';

import React from 'react'
import Nav from '../components/header/nav'
import SearchBox from '../components/header/searchBox'
import FallowUs from '../components/header/fallowUs'
import Slider from '@/components/slider'


export default function Home() {
  return (
    <div style={{
      position: "relative",
      height: "800px",
      width: "100%",
      backgroundImage: "url('/images/movie-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          zIndex: 0,
        }}
      ></div>

      <div className="overflow-hidden	 container p-4 mx-auto w-4/6" style={{ position: "relative", zIndex: 1 }}>
        <Nav />
        <SearchBox />
        <FallowUs />
        <Slider />
      </div>

    </div>
  );
}