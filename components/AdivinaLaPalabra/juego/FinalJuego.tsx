import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react"
import styles from "../../../styles/AdiLaPalJuego.module.css"

interface Props{
    children: React.ReactNode;
    correctas:number;
    incorrectas:number;
    puntos:number;
    setReiniciar:Dispatch<SetStateAction<number>>;
}

const FinalJuego:FC<Props> = (props) =>{
    return (
        <div className={styles.boxFinal}>
            <ul className={`${styles.BoxTableroFinal} ${styles.ul} row`}>
                <li className={`${styles.LiTableroFinal} centradoPorDefecto col-12`}>
                    <p className={`${styles.PTableroFinalPuntos}`}>
                        Puntos
                    </p>
                    <p className={`${styles.PTableroFinalPuntos}`}>
                        {props.puntos}
                    </p>
                </li>
                <li className={`${styles.LiTableroFinal} col-4`}>
                    <p className={`${styles.PTableroFinal} `}>
                        Palabras Totales
                    </p>
                    <p className={`${styles.PTableroFinal} `}>
                        {props.correctas+props.incorrectas}
                    </p>
                </li>
                <li className={`${styles.LiTableroFinal} col-4`}>
                    <p className={`${styles.PTableroFinal} `}>
                        Correctas
                    </p>
                    <p className={`${styles.PTableroFinal} `}>
                        {props.correctas}
                    </p>
                </li>
                <li className={`${styles.LiTableroFinal} col-4`}>
                    <p className={`${styles.PTableroFinal} `}>
                        Incorrectas
                    </p>
                    <p className={`${styles.PTableroFinal} `}>
                        {props.incorrectas}
                    </p>
                </li>
            </ul>
            <div className={`${styles.boxBtnFinal}`}>
                <Link href="/AdivinaLaPalabra/main">
                    <button className={`${styles.BtnFinal}`}>
                        Volver
                    </button>
                </Link>
                <button 
                    className={`${styles.BtnFinal}`} 
                    onClick={e => {e.preventDefault(); props.setReiniciar(n => n + 1)}}>
                    Reiniciar
                </button>
            </div>
            <div className={`${styles.boxChildren}`}>
                <h6 className="text-center m-auto">Resultados</h6>
                {props.children}
            </div>
        </div>
    )
}

export default FinalJuego