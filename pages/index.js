import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
//import cenas from './api/sw.js';
import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "../services/firebase";

initFirebase();

function Home() {

  //const result = firebase.auth().signInWithPopup(provider);
  const user = firebase.auth().currentUser;

  if (user != null) {
    const username = user.displayName;
    console.log(username);

    return (
      <div>
        <h1>I love Coffee</h1>
        <Link href="/coffee">
          <a>Get coffee</a>
        </Link>
        <h1>Hi, {username}</h1>
      </div>
    )

  }

  return (
    <div>
      <h1>Hello</h1>
      <Link href="/join">
          <a>Go to login page</a>
        </Link>
    </div>
  )


}

export default Home;