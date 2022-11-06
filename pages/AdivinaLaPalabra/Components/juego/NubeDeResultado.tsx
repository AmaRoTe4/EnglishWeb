import styles from '../../../../styles/HomeWorks.module.css'
import { Palabras } from '../../../../interfaces'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
import { Dispatch, SetStateAction } from 'react'

interface Props{
    seleccionado:Palabras;
    setSeleccionado:Dispatch<SetStateAction<Palabras>>;
}

export function NubeDeResultado({seleccionado , setSeleccionado}: Props):JSX.Element{
    const { partida } = useSelector((state:RootState) => state.juego)

    return (
        <div className={`${styles.RespuestaCorreta}`}>
            <div className={`${styles.btnSalidaEror} position-absolute p-2 HoverGenerico`}
            onClick={e => {e.preventDefault(); setSeleccionado({
                'id': 1000,
                'palabraEnIngles': [''],
                'palabraEnEspañol': [''],
                'estado':2,
                'respuesta':'',
            })}}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <div className='centradoColumn' style={{height:'100%' , width:'100%'}}>
                <h5 className='text-break text-center'>Respondiste: {seleccionado.respuesta}</h5>
                <h5 className='text-break text-center'>La Respuesta Correcta es: </h5>
                <h5>
                    {!partida.OrdernDeIdioma ? 
                    seleccionado.palabraEnEspañol.length > 1 ? 
                    ` ${seleccionado.palabraEnEspañol[0]} o ${seleccionado.palabraEnEspañol[1]}` : seleccionado.palabraEnEspañol[0] :
                    seleccionado.palabraEnIngles.length > 1 ?
                    ` ${seleccionado.palabraEnIngles[0]} o ${seleccionado.palabraEnIngles[1]}`:
                    seleccionado.palabraEnIngles[0]}
                </h5>
            </div>
        </div>
    )
}
