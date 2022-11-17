import styles from '../../styles/AdiLaPalJuego.module.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RootState } from '../../store/store'
import { Tablero } from '../../components/AdivinaLaPalabra/juego/Tablero'
import { Palabras } from '../../interfaces'
import IniciarPartida from '../../functions/AdivinaLaPalabra/juego/iniciarPartida'
import Barra from '../../components/AdivinaLaPalabra/juego/Barra';
import {resultado} from '../../functions/AdivinaLaPalabra/juego/comprobar'
import FinalJuego from '../../components/AdivinaLaPalabra/juego/FinalJuego';
import Swal from 'sweetalert2';

const PorDefecto:Palabras = 
{
    'id': 1000,
    'palabraEnIngles': [''],
    'palabraEnEspañol': [''],
    'estado':2,
    'respuesta':'',
}

export default function Juego():JSX.Element{
    const router = useRouter();
    const { partida } = useSelector((state:RootState) => state.juego)
    const [respuesta , setRespuesta] = useState<string>('')
    const [seleccionado , setSeleccionado] = useState<Palabras>(PorDefecto);
    const [palabras , setPalabras] = useState<Palabras[]>([]);
    const [restantes , setRestantes] = useState<number>(0);
    const [correctas , setCorrectas] = useState<number>(0);
    const [incorrectas , setIncorrectas] = useState<number>(0);
    const [puntos , setPuntos] = useState<number>(0);
    const [reiniciar , setReiniciar] = useState<number>(0);

    useEffect(()=> {
        if(partida.Cantidad === 0) router.push('/AdivinaLaPalabra/main')
        let aux:Palabras[] = IniciarPartida(partida)
        //@ts-expect-error
        setSeleccionado(aux.shift())
        setPalabras(aux)
        setRestantes(aux.length)
        if(reiniciar > 0){
            setCorrectas(0) 
            setIncorrectas(0) 
            setPuntos(0) 

        }
    },[partida, reiniciar, router])

    const asignarTablero = (resultado:boolean) => {
        if(resultado){
            setRestantes(n => n-1)
            setCorrectas(n => n + 1)
            setPuntos(n => n + 100)
        }else{
            setRestantes(n => n - 1)
            setPuntos(n => n === 0 ? 0 : n - 25)
            setIncorrectas(n => n + 1)
        }
        setRespuesta("");
    }

    const resolver = (accion:number):void => {
        let res:boolean = accion === 1 
        ? resultado(partida.OrdernDeIdioma , respuesta , seleccionado)
        : false;

        let auxSele:Palabras = seleccionado;
        let auxPala:Palabras[] = palabras;
        
        if(res) auxSele.estado = 1;
        auxSele.respuesta = respuesta !== "" ? respuesta : "...";
        
        //@ts-expect-error
        if(palabras.length > 0) setSeleccionado(auxPala.shift());
        auxPala.push(auxSele);
        setPalabras(auxPala);
        
        asignarTablero(res);
    }

    return (
            <div style={{ 
                    minHeight:`100vh`,
                    height:`${'auto'}`,
                    backgroundColor: "rgb(65, 65, 65)",
                    color:'white',
                }}>
                {restantes !== -1 && <>
                    <Tablero 
                        restantes={restantes}
                        puntos={puntos}
                        correctas={correctas}
                        incorrectas={incorrectas}    
                    />
                    <section className={`${styles.boxCenter} row`}>    
                        <div className={`${styles.boxInternal} col-12 col-md-10 centradoColumn`}>
                            <div className={`${styles.boxPalabra} centradoPorDefecto`}>
                                {palabras.length > 0 && 
                                <p className={`${styles.Palabra} `}>
                                    {partida.OrdernDeIdioma ?
                                    seleccionado.palabraEnEspañol[0] :
                                    seleccionado.palabraEnIngles[0]}
                                </p>}
                            </div>
                            <input 
                                value={respuesta}
                                type="text"
                                placeholder="respuesta"
                                className={`${styles.InputResp}`}
                                onChange={e => setRespuesta(e.target.value)}
                            />
                            <div className={`${styles.boxBtnResp}`}>
                                <button 
                                    className={`${styles.BtnPasar} ${styles.BtnResp}`}
                                    onClick={e => {e.preventDefault(); resolver(0)}}
                                >
                                    Pasar
                                </button>
                                <button 
                                    className={`${styles.BtnComprobar} ${styles.BtnResp}`}
                                    onClick={e => {e.preventDefault(); resolver(1)}}
                                >
                                    Comprobar
                                </button>
                            </div>
                        </div>
                        <div className={`${styles.boxBarra} col-12 col-md-2`}>
                            <Barra 
                                palabras={palabras} 
                                orden={partida.OrdernDeIdioma}
                                invertir={true} 
                            />
                            <div className={`${styles.boxBtnVolver} centradoPorDefecto`}>
                                <Link href="/AdivinaLaPalabra/main">
                                    <button className={`${styles.BtnVolver}`}>
                                        Volver
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </>}
                {restantes === -1 &&
                <FinalJuego 
                    puntos={puntos}
                    correctas={correctas}
                    incorrectas={incorrectas}
                    setReiniciar={setReiniciar}
                >
                    {<ul className={styles.UlResultado}>
                        {palabras.map((n , i) => 
                            <li key={i} 
                            onClick={e => {e.preventDefault(); Swal.fire({
                                title: 'Info',
                                text:"",
                                html:
                                `<div className="border">
                                    <p>respuesta: ${n.respuesta}</p>
                                    <p>resp correcta: ${!partida.OrdernDeIdioma 
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
                            {partida.OrdernDeIdioma 
                            ? n.palabraEnEspañol[0] 
                            : n.palabraEnIngles[0]}
                        </li>
                        )}
                    </ul>}
                </FinalJuego>}
            </div>
    )
}