import styles from '../../../../styles/HomeWorks.module.css'
import { Palabras } from '../../../../interfaces'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
import { Dispatch, SetStateAction } from 'react'

interface Props{
    setSeleccionado?:Dispatch<SetStateAction<Palabras>>;
    palabras:Palabras[]
}


export function BarrasLaterales({palabras , setSeleccionado}: Props):JSX.Element{
    const { partida } = useSelector((state:RootState) => state.juego)

    return (
        <div className={`${styles.BarrasLaterales} d-flex flex-column align-items-center`}>
            <div className={`${styles.ProximaPala} d-flex justify-content-center align-items-end`}>
                <p className="text-center" style={{fontSize:'20px'}}>
                    {palabras[palabras.length-1].id !== 1000 ? 'Proximas Palabras' : 'Respuestas'}
                </p>
            </div>
            {!setSeleccionado &&
                <div className={`${styles.TablaDePalabras}`}>
                    {palabras.map((n , i) => i!==0 ? 
                    <p key={i}>
                        {partida.OrdernDeIdioma ? n.palabraEnEspañol[0] : n.palabraEnIngles[0]}
                    </p> : '')}
                </div>
            }
            {setSeleccionado &&
                <ul className={`${styles.TablaDePalabras} d-flex align-items-center flex-column`} style={{listStyle:"none" , margin:'0px' , padding:'0px'}}>
                {palabras.map((n , i) => n.estado !== 2 ? 
                    <li className={`${styles.Resp} HoverGenerico`} 
                        key={i} 
                        style={{backgroundColor:`${n.estado === 1 ? 
                        "rgb(21, 160, 32)" : 'rgb(175, 29, 29)'}`}}
                        onClick={e => {e.preventDefault(); setSeleccionado(n)}}>
                        {partida.OrdernDeIdioma ? n.palabraEnEspañol[0] : n.palabraEnIngles[0]}
                    </li> : '')}
                </ul>}
        </div>
    )
}
