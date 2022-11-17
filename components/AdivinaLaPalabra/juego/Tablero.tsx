//import { useSelector } from 'react-redux'
//import { RootState } from '../../../store/store'
import styles from '../../../styles/AdiLaPalJuego.module.css'

interface Props{
    puntos:number,
    restantes:number,
    correctas:number,
    incorrectas:number,
}

export function Tablero({
    puntos,
    restantes,
    correctas,
    incorrectas
}:Props):JSX.Element{
    return (
        <nav className={`${styles.boxMenuExterno} centradoPorDefecto`}>
            <ul className={`${styles.boxMenuIternal} ${styles.ul} row`}>
                <li className={`${styles.boxItemsMenu} col-12 col-md-3`}>
                    <span className={`${styles.ItemsMenu}`}>
                        {puntos}
                    </span>
                    <span className={`${styles.ItemsMenu}`}>
                        Puntos
                    </span>
                </li>
                <li className={`${styles.boxItemsMenu} col-4 col-md-3`}>
                    <span className={`${styles.ItemsMenu}`}>
                        {restantes}
                    </span>
                    <span className={`${styles.ItemsMenu}`}>
                        Restantes
                    </span>
                </li>
                <li className={`${styles.boxItemsMenu} col-4 col-md-3`}>
                    <span className={`${styles.ItemsMenu}`}>
                        {correctas}
                    </span>
                    <span className={`${styles.ItemsMenu}`}>
                        Correctas
                    </span>
                </li>
                <li className={`${styles.boxItemsMenu} col-4 col-md-3`}>
                    <span className={`${styles.ItemsMenu}`}>
                        {incorrectas}
                    </span>
                    <span className={`${styles.ItemsMenu}`}>
                        Incorrectas
                    </span>
                </li>
            </ul>
        </nav>
    )
}