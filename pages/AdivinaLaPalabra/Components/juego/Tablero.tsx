import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
import styles from '../../../../styles/HomeWorks.module.css'

interface Props{
    contadores:number[],
    largo:number
}

export function Tablero({largo , contadores}:Props):JSX.Element{
    const { partida } = useSelector((state:RootState) => state.juego)

    return (
        <div className={`${styles.tablero} d-flex justify-content-around align-items-center`}>
            <div className={`${styles.BoxTitle}`}>
                <span className="d-flex justify-content-center align-items-end" style={{height:'50%'}}>
                    <p>Cantidad</p>
                </span>
                <span className="d-flex justify-content-center" style={{height:'50%'}}>
                    <p>{contadores[0]}{largo !== 0 && `/${partida.Cantidad}`}</p>
                </span>
            </div>
            <div className={`${styles.BoxTitle}`}>
                <span className="d-flex justify-content-center align-items-end" style={{height:'50%'}}>
                    <p>Puntos</p>
                </span>
                <span className="d-flex justify-content-center" style={{height:'50%'}}>
                    <p>{contadores[3]}</p>
                </span>
            </div>
            <div className={`${styles.BoxTitle}`}>
                <span className="d-flex justify-content-center align-items-end" style={{height:'50%'}}>
                    <p>Acertadas</p>
                </span>
                <span className="d-flex justify-content-center" style={{height:'50%'}}>
                    <p>{contadores[2]}</p>
                </span>
            </div>
            <div className={`${styles.BoxTitle}`}>
                <span className="d-flex justify-content-center align-items-end" style={{height:'50%'}}>
                    <p>Erradas</p>
                </span>
                <span className="d-flex justify-content-center" style={{height:'50%'}}>
                    <p>{contadores[1]}</p>
                </span>
            </div>
        </div>
    )
}