import { Dispatch, SetStateAction } from 'react';
import styles from '../../styles/Translator.module.css'

interface Props{
    seleccionado:number,
    setSeleccionado:Dispatch<SetStateAction<number>>
}

export default function Seleccionador({seleccionado , setSeleccionado}: Props){
    return (
        <div className={`${styles.Formulario}`}>
            <div 
                className={`${styles.InputSelecIdeo} centradoColumn`}
                style={{
                    borderTopLeftRadius:'5px' , 
                    borderBottomLeftRadius:'5px' , 
                    backgroundColor:`${seleccionado === 0 ? 'rgb(50 150 255)' : 'white'}`}}
                onClick={e => {e.preventDefault() ; setSeleccionado(seleccionado === 0 ? 1 : 0)}}
            >
                {seleccionado === 0 ? <i className="fa-solid fa-check"></i> : 'ENG'}
            </div>
            <div 
                className={`${styles.InputSelecIdeo} centradoColumn`}
                style={{
                    borderTopRightRadius:'5px' , 
                    borderBottomRightRadius:'5px' , 
                    backgroundColor:`${seleccionado === 1 ? 'rgb(50 150 255)' : 'white'}`}}
                onClick={e => {e.preventDefault() ; setSeleccionado(seleccionado === 0 ? 1 : 0)}}
            >
                {seleccionado === 1 ? <i className="fa-solid fa-check"></i> : 'ESP'}
            </div>
        </div>
    )
}