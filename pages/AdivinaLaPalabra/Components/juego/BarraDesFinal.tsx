import Link from 'next/link'
import styles from '../../../styles/HomeWorks.module.css'
import { Palabras } from '../../../interfaces'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { Dispatch, SetStateAction } from 'react'

interface Props{
    setSeleccionado:Dispatch<SetStateAction<Palabras>>;
    palabras:Palabras[];
    funcion:Function;
}


export function BarraFinal({setSeleccionado , palabras , funcion}: Props):JSX.Element{
    const { partida } = useSelector((state:RootState) => state.juego)

    return (
        <>
            <div className={`${styles.ContentBtnFinal} centradoPorDefecto`}>
                <Link href={'/AdivinaLaPalabra/main'}>
                    <div className={`${styles.btnFinalDePartida} HoverGenerico centradoPorDefecto`}>
                        Nueva Partida
                    </div>
                </Link>
                <div className={`${styles.btnFinalDePartida} HoverGenerico centradoPorDefecto`} onClick={(e) => {e.preventDefault(); funcion()}}>
                    Reiniciar
                </div>
            </div>
            <a className={`${styles.btnRespuestas} btn mt-5 nav-link dropdown-toggle HoverGenerico`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Respuestas
            </a>
            <ul className="dropdown-menu dropdown-menu-dark"
                style={{width:'100%' , backgroundColor:'rgb(40, 40,40)' , maxHeight:'225px' , overflow:'auto'}}>
                {palabras.map((n , i) => i !== palabras.length-1 ? 
                    <li 
                    className={`${styles.RespFinal} HoverGenerico dropdown-item`} 
                    key={i} 
                    style={{backgroundColor:`${n.estado === 1 ? "rgb(21, 160, 32)" : 'rgb(175, 29, 29)'}`}}
                    onClick={e => {e.preventDefault(); setSeleccionado(n)}}>
                    {partida.OrdernDeIdioma ? n.palabraEnEspañol[0] : n.palabraEnIngles[0]}
                    </li> 
                    : '')}
            </ul>
        </>
    )
}
