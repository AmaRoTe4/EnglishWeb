import styles from '../../../styles/HomeWorks.module.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RootState } from '../../store/store'
//import { BarrasLaterales } from './Components/juego/BarrasLaterales'
//import { Tablero } from './Components/juego/Tablero'
//import { BarraFinal } from './Components/juego/BarraDesFinal'
//import { NubeDeResultado } from './Components/juego/NubeDeResultado'
import { Palabras } from '../../interfaces'
import IniciarPartida from '../../functions/AdivinaLaPalabra/juego/iniciarPartida'
import {ComprobarEsp , ComprobarIng} from '../../functions/AdivinaLaPalabra/juego/comprobar'

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
    const [palabras , setPalabras] = useState<Palabras[]>([]);
    const [resultadoPalabras , setResultadoPalabras] = useState<Palabras[]>([PorDefecto]);
    const [seleccionado , setSeleccionado] = useState<Palabras>(PorDefecto);
    //pasadas , mal , bien , puntos
    const [contadores  , setContadores] = useState<number[]>([0, 0, 0, 0]);
    const [barraLateral  , setBarraLateral] = useState<number>(0);

    useEffect(()=> {
        setPalabras([])
        palabras.length === 0 
        ? setPalabras(IniciarPartida(partida)) 
        : router.push('/AdivinaLaPalabra/main')
    },[])

    const funcionPalabra = () => {
        const resp = partida.OrdernDeIdioma 
        ? ComprobarEsp(palabras , respuesta)
        : ComprobarIng(palabras , respuesta)

        let modPalabra:Palabras | undefined = palabras.shift();

        if(resp && modPalabra !== undefined) modPalabra.estado = 1;
        if(modPalabra !== undefined){
            modPalabra.respuesta = respuesta;
            setResultadoPalabras([modPalabra , ...resultadoPalabras]);
        }

        setRespuesta("");
        
        if(resp){
            setContadores(n => [n[0] + 1 ,n[1] , n[2]+1 , n[3]+100])
        }else{
            setContadores(n => [n[0] + 1 ,n[1]+1 , n[2] , n[3] === 0 ? n[3]: n[3] - 25 ])
        }
    }

    const Reiniciar = ():void => {
        setContadores([0,0,0,0])
        setResultadoPalabras([PorDefecto])
        setPalabras([])
        palabras.length === 0 
        ? setPalabras(IniciarPartida(partida)) 
        : router.push('/AdivinaLaPalabra/main')
    }

    const pasar = ():void => {
        let aux = palabras
        const descarte:Palabras | undefined = aux.shift()
        if(descarte) descarte.respuesta = "Paso";
        if(descarte !== undefined) setResultadoPalabras(n => [descarte , ...n]);
        setPalabras(aux)
        setRespuesta('');
        setContadores([contadores[0] + 1 ,contadores[1]+1 , contadores[2] , 
        contadores[3] === 0 ? contadores[3]: contadores[3] - 25 ])
    }

    return (
            <div className='d-flex flex-column align-items-center justify-content-center'
            style={{ 
                height: `${palabras.length === 0 ? '140vh' : 'auto'}`,
                backgroundColor: "rgb(65, 65, 65)",
                color:'white',
            }}>
                <div className={`${styles.containCenter} ${seleccionado.id !== 1000 ? 'opacity-50' : ''}`}>
                    <div className={`${styles.CentroJuego} 
                    ${palabras.length === 0 && styles.MovCentrado}`}>

                        {palabras.length === 0 && <h1>Resultado</h1>}
                        {/* el tablero de la partida */}
                        {/*<Tablero contadores={contadores} largo={palabras.length} />*/}
                        
                        {/* esta se ejecuta el terminar el juego */}
                        {/*{palabras.length === 0 && 
                        <BarraFinal 
                            palabras={resultadoPalabras} 
                            setSeleccionado={setSeleccionado} 
                            funcion={Reiniciar} 
                        />
                        }

                        {/* este en si es el input de entrdas delas respuests , esta es local*/}
                        {palabras.length !== 0 && 
                        <div className={`${styles.BoxRespuesta}
                        d-flex flex-column align-items-center`}>
                            {palabras.length > 0 && <p className={`${styles.palabraJuego} text-center`}>
                                {partida.OrdernDeIdioma ?
                                palabras[0].palabraEnEspañol[0] :
                                palabras[0].palabraEnIngles[0]}
                            </p>}
                            <input value={respuesta} onChange={e => setRespuesta(e.target.value)}/>
                            <button className={`${styles.botonesRespuesta} mt-4 btn btn-light`} 
                            onClick={(e) => {e.preventDefault() ; funcionPalabra()}}>Comprobar</button>
                            <button className={`${styles.botonesRespuesta} mt-2 btn btn-danger`} 
                            onClick={(e) => {e.preventDefault() ; pasar()}}>Pasar</button>
                        </div>}
                    </div>
                    {palabras.length !== 0 && 
                    <button className={`${styles.btnLateral} btn btn-light`}
                    onClick={(e) => {e.preventDefault(); setBarraLateral(barraLateral === 0 ? 1 : 0)}}>
                        {
                            barraLateral === 0 ? 
                            <i className="fa-solid fa-arrow-right"></i>
                            :<i className="fa-solid fa-arrow-left"></i>
                        }
                    </button>}
                    {palabras.length !== 0 && barraLateral === 0 &&
                    <div className={`${styles.ConteinerPalabrasExterno}`}>
                        {/* barra lateral de palabras */}
                        <div className={`${styles.ConteinerPalabras}`}>
                            {/*<BarrasLaterales palabras={palabras} />*/}
                            {/*<BarrasLaterales palabras={resultadoPalabras} setSeleccionado={setSeleccionado} />*/}
                        </div>
                        <div className={`${styles.salida} centradoPorDefecto`}>
                            <Link href={'/AdivinaLaPalabra/main'}>
                                <button className={`${styles.salidaLink} btn btn-danger`} type="button">
                                    cancelar
                                </button>
                            </Link>
                        </div>
                    </div>
                    }
                </div>
                {/* esta es la consulta del la palabras */}
                {/*{seleccionado.id !== 1000 &&
                <NubeDeResultado seleccionado={seleccionado} setSeleccionado={setSeleccionado} />
                }*/}
            </div>
    )
}