import styles from '../styles/components/BoxLogin.module.css'
import Link from 'next/link'

export function BoxLogin(){
    return(
        <div className={styles.container}>

            <h2>Bem-vindo</h2>
            
            <div className={styles.informacao}>
                <img src="icons/Github.svg" alt="icone github"/>
                <p>Faça login com seu Github para começar</p>              
            </div>

            <div className={styles.signIn}>
                <input type="text" placeholder="Digite seu username"/>
                <Link href="/main">
                    <button>
                        <img src="icons/Vector.svg" alt=""/>
                    </button>
                </Link>
            </div>

        </div>
    )
}