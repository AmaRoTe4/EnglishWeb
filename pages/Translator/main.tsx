import styles from '../../styles/Translator.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link';
import {TraduccionEsp , TraduccionIng} from '../../functions/Translator/traductor'
import Seleccionador from '../../components/Translator/Seleccionador';

export default function Main(){ 
    const [seleccionado , setSeleccionado] = useState<number>(0)
    const [text , setText] = useState<Array<string>>(['' ,'']);

    useEffect(() => {
        setText(['', ''])
    }, [seleccionado])

    return (
        <div className="d-flex align-items-center flex-column" style={{
            backgroundColor: "rgb(95 , 95 , 95)",
            minHeight: "100vh",
            height: "auto"
        }}>
            <nav className={`${styles.BoxTitulo}`}>
                <div className={`${styles.Titulo}`}>
                    Traductor
                </div>
                <div className={`${styles.BoxBtnVolver} HoverGenerico`}>
                    <Link href="/">
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </div>
            </nav>
            <section className={`${styles.boxSelecion}`}>
                <Seleccionador 
                    seleccionado={seleccionado} 
                    setSeleccionado={setSeleccionado} 
                />
            </section>
            <section className={`${styles.boxTranslator}`}>
                <div className={`${styles.boxTextarea} centradoPorDefecto`}>
                    <textarea
                        className={`${styles.Textarea}`}
                        value={text[0]} 
                        autoComplete="off"
                        autoFocus={true}
                        onChange={(e) => {e.preventDefault() ; 
                            seleccionado === 0 
                                ? setText([e.target.value , TraduccionEsp(e.target.value)]) 
                                : setText([e.target.value , TraduccionIng(e.target.value)])
                            }}
                        placeholder={seleccionado === 0 ? "Ingles" : "Español"}>
                    </textarea>
                </div>
                <div className={`${styles.boxTextarea} centradoPorDefecto`}>
                    <textarea
                        className={`${styles.Textarea}`}
                        value={text[1]} 
                        autoComplete="off"
                        autoFocus={true}
                        disabled={true}
                        style={{opacity: `${text[0] === "" ? .85 : 1}`}}
                        placeholder={seleccionado !== 0 ? "Ingles" : "Español"}>
                    </textarea>
                </div>
            </section>
        </div>
    )
}