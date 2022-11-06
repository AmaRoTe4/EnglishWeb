import styles from '../../styles/Translator.module.css'
import { useState } from 'react'
import Link from 'next/link';
import Translator from './Components/Translator';
import Seleccionador from './Components/Seleccionador';

export default function Main(){ 
    const [seleccionado , setSeleccionado] = useState<number>(0)

    return (
        <div className="d-flex align-items-center flex-column" style={{
            backgroundColor: "rgb(95 , 95 , 95)",
            minHeight: "120vh",
            height: "auto"
        }}>
            <div className='HoverGenerico position-absolute top-0 end-0 mt-2 me-3'>
                <Link href="/">
                    <i className="fa-solid fa-house" style={{color:'white'}}></i>
                </Link>
            </div>
            <div className={`${styles.boxTitulo} mt-5`}>
                <div className={`${styles.Agregado}`} ></div>
                <div className={`${styles.Titulo} centradoColumn`}>
                    Tranductor
                </div>
                <Seleccionador 
                    seleccionado={seleccionado} 
                    setSeleccionado={setSeleccionado} 
                />
            </div>
            <Translator seleccionado={seleccionado} />
        </div>
    )
}