import styles from './NotFoundBlock.module.scss'

export const PageError: React.FC = () => {
    return(
        <div className={styles.root}>
            <h1>
                <span>
                😕
                </span>
                <br/>
                Помилка сервера
            </h1>
            <p className={styles.description}>
            оновіть сторінку або зверніться до тих підтримки
            </p>
        </div>
    )
} 

