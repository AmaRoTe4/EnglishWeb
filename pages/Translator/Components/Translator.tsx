import { useEffect, useState } from 'react'
import styles from '../../../styles/Translator.module.css'
import { TraduccionEsp , TraduccionIng } from '../functions/traductor'

interface Props{
    seleccionado:number;
}

export default function Translator({seleccionado}:Props): JSX.Element{
    const [text , setText] = useState<Array<string>>(['' ,'']);

    useEffect(() => {
        setText(['', ''])
    }, [seleccionado])
    

    return (
        <div className={`${styles.boxTranslator}`}>
            <textarea 
                className={`${styles.Textarea}`}
                style={{marginRight:"15px" , marginLeft:"5px"}}
                value={text[0]} 
                onChange={(e) => {e.preventDefault() ; 
                    seleccionado === 0 
                        ? setText([e.target.value , TraduccionEsp(e.target.value)]) 
                        : setText([e.target.value , TraduccionIng(e.target.value)])
                    }}
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
    )
}