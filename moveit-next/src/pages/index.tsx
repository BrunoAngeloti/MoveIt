import styles from '../styles/pages/Login.module.css'
import Head from 'next/head'
import { BoxLogin } from '../components/BoxLogin'

export default function Login(){
  return(
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
  
      <section>
        <div>
          <img src="icons/Simbolo.svg" alt="imagem NLW"/>
        </div>
        <div className={styles.login}>
          <img src="icons/Logo.svg" alt="logo moveit"/>
          <BoxLogin />
        </div>
      </section>
      
    </div>
  )
}