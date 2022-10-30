import styles from '../../styles/Translator.module.css'
import { useState } from 'react'
import Link from 'next/link';
//este ees una funcion que te trae el conjunto de los json
//import Carga from '../../store/slice/generalData/cargarData'
import json from '../../Data/general.json'
import { CuerpoPalabras, Palabras } from '../../interfaces';
import Seleccionador from './Components/Seleccionador';

export default function Main(){
    const [dataLocal] = useState<CuerpoPalabras[]>(json) 
    const [text , setText] = useState<Array<string>>(['' ,'']);
    const [seleccionado , setSeleccionado] = useState<number>(0)

    const Traduccion = (texto:string):void => {
        if(dataLocal.length > 0){ 
            const palabras:CuerpoPalabras[] = dataLocal.filter(n => 
            {
                const textAux = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                const aux = seleccionado === 0 ? 
                n.en.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split("/") : 
                n.es.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split("/")

                const retorno = aux.filter(m => m === textAux)
                
                if(retorno.length > 0) return n
            });

            if(palabras[0]){
                setText([texto ,seleccionado === 0 ? palabras[0].es : palabras[0].en])
            }
            else setText([texto , ''])
        }
    }

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
            <div className={`${styles.boxTranslator}`}>
                <textarea 
                    className={`${styles.Textarea}`}
                    style={{marginRight:"15px" , marginLeft:"5px"}}
                    value={text[0]} 
                    onChange={(e) => {e.preventDefault() ; Traduccion(e.target.value)}}
                    placeholder={seleccionado === 0 ? "Ingles" : "Español"}>
                </textarea>
                <div 
                    className={`${styles.Textarea}`}
                    style={{marginRight:"5px" , marginLeft:"15px" , backgroundColor:"white"}}>
                    <p className={`${text[1] === '' ? 'opacity-75' : '' } m-1`}>
                        {text[1] !== "" ? text[1] : seleccionado === 0 ? "Español" : "Ingles" }
                    </p>
                </div>
            </div>
        </div>
    )
}