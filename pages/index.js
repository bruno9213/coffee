import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
//import cenas from './api/sw.js';

function Home() {  
  return (
    <div>
        <h1>I love Coffee</h1>
        <Link href="/coffee">
          <a>Get coffee</a>
        </Link>
    </div>
  )
}


export default Home;