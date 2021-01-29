import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
//import cenas from './api/sw.js';

function Coffee() {  
  const [coffee,setcoffee] = useState(1);

  function addcoffee(){
    setcoffee(coffee + 1);
  }
  return (
    <div>
        <Link href="/">
          <a><h1>Back</h1></a>
        </Link>
        <p>Coffee Counter: {coffee} <button onClick={addcoffee}>+1</button></p>
        <video
        autoPlay
        loop
        muted
        style={{
          position: "relative",
          width: "100%",
          left: 0,
          top: 0
        }}
        >
        <source src="video.mp4" type="video/mp4" />
      </video>
      <p>Coffee is consumed in such great quantities, it is the world's 2nd largest traded commodity, surpassed only by crude oil.
        It is our most beloved beverage after water. It's worth well over $100 billion worldwide.</p>
    </div>
  )
}


export default Coffee;