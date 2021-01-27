import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
//import cenas from './api/sw.js';

function Home() {  
  return (
    <div>
        <h1>I love Coffee</h1>
        <Image
          src="/coffee.jpg"
          alt="Coffee"
          width={1600}
          height={1200}
        />
    </div>
  )
}

export default Home;