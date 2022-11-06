import styles from '../../../styles/Teoria.module.css'

interface Props{
    text:string
}

export const CuadroDeTeoria = ({text}:Props):JSX.Element => {
    return (
        <div className={`${styles.BoxTeoria} text-break`}>
            <p className={`${styles.TextTeoria}`}>
                {text}
            </p>
        </div> 
    )
}