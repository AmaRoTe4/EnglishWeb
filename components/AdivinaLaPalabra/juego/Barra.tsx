import Swal from 'sweetalert2';
import { Palabras } from '../../../interfaces'
import styles from '../../../styles/AdiLaPalJuego.module.css'
import { invertirArray } from "../../../functions/AdivinaLaPalabra/juego/invertirArray"


interface Props {
    palabras:Palabras[],
    orden:boolean;
    invertir?:boolean;
}

export default function Barra({palabras , orden , invertir}:Props){
    if(invertir) palabras = invertirArray(palabras);
    
    return (
        <ul className={`${styles.boxList}`}>
            {palabras.map((n , i) => (
                <>
                    {n.respuesta === "" && 
                    <li key={i} 
                        className={`${styles.basicElemList} centradoPorDefecto`}
                    >
                        {orden ?
                        n.palabraEnEspañol[0] :
                        n.palabraEnIngles[0]}
                    </li>}
                    {n.respuesta !== "" && 
                    <li key={i} 
                        onClick={e => {e.preventDefault(); Swal.fire({
                            title: 'Info',
                            text:"",
                            html:
                            `<div className="border">
                                <p>respuesta: ${n.respuesta}</p>
                                <p>resp correcta: ${!orden 
                                ? n.palabraEnEspañol[0] 
                                : n.palabraEnIngles[0]}</p>
                            </div>`,
                            icon: 'info',
                            confirmButtonText: 'Ok'
                        })}}
                        className={`${styles.basicElemList} centradoPorDefecto
                            ${n.estado === 0 
                            ? styles.incorrectElemList
                            : styles.correctElemList}`}
                    >
                        {orden ?
                        n.palabraEnEspañol[0] :
                        n.palabraEnIngles[0]}
                    </li>}
                </>)
            )}
        </ul>
    )
}