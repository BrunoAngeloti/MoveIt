import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="http://github.com/BrunoAngeloti.png" alt="Bruno Angeloti"/>
            <div>
                <strong>Bruno Angeloti</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}