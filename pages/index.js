import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
//import cenas from './api/sw.js';

function Home() {  
  return (
    <div>
        <h1>I love Coffee</h1>
        <video
        autoPlay
        loop
        style={{
          position: "relative",
          width: "100%",
          left: 0,
          top: 0
        }}
        >
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}


export default Home;