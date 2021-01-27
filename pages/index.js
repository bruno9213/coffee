import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {  
  return (
    <div>
      <h2>Parabéns! Você é bronze!</h2>
      <p>Podes clicar <a href="/api/sw">aqui</a> para veres a minha api do SW xD</p>
      <div id="emitter"></div>
    </div>
  )
}
