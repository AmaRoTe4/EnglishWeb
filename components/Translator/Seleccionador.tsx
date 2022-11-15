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
                    borderTopLeftRadius:'10px'}}
            >
                {seleccionado === 0 ? 'ENG' : "ESP"}
            </div>
            <div 
                className={`${styles.InputCenter} centradoColumn`}
                onClick={e => {e.preventDefault() ; setSeleccionado(seleccionado === 0 ? 1 : 0)}}
            >
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
            <div 
                className={`${styles.InputSelecIdeo} centradoColumn`}
                style={{
                    borderTopRightRadius:'10px'}}
            >
                {seleccionado === 1 ? "ENG" : 'ESP'}
            </div>
        </div>
    )
}