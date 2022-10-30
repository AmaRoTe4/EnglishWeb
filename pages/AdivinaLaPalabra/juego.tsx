import { useEffect, useState } from 'react';
import styles from '../../styles/HomeWorks.module.css'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { BarrasLaterales } from './Components/juego/BarrasLaterales'
import { Tablero } from './Components/juego/Tablero'
import { BarraFinal } from './Components/juego/BarraDesFinal'
import { NubeDeResultado } from './Components/juego/NubeDeResultado'
import { Palabras } from '../../interfaces'
//esto son los json de data
import Acciones from '../../Data/Juego/Acciones.json'
import Adjetivos from '../../Data/Juego/Adjetivos.json'
import Cosas from '../../Data/Juego/Cosas.json'
import Familia from '../../Data/Teoria/Familia.json'
import Fechas from '../../Data/Juego/Fechas.json'
import Informatica from '../../Data/Juego/Informatica.json'
import Numeros from '../../Data/Teoria/Numeros.json'
import {CuerpoPalabras} from '../../interfaces'
import Link from 'next/link';

const PorDefecto:Palabras = 
{
    'id': 1000,
    'palabraEnIngles': [''],
    'palabraEnEspañol': [''],
    'estado':2,
    'respuesta':'',
}

export default function Juego():JSX.Element{
    const router = useRouter()
    const { partida } = useSelector((state:RootState) => state.juego) 
    const [respuesta , setRespuesta] = useState<string>('')
    const [palabras , setPalabras] = useState<Palabras[]>([]);
    const [resultadoPalabras , setResultadoPalabras] = useState<Palabras[]>([PorDefecto]);
    const [seleccionado , setSeleccionado] = useState<Palabras>(PorDefecto);
    //pasadas , mal , bien , puntos
    const [contadores  , setContadores] = useState<number[]>([0, 0, 0, 0]);
    const [barraLateral  , setBarraLateral] = useState<number>(0);

    useEffect(()=> {
        iniciarPartida();
    },[])

    const iniciarPartida = ():void => {
        setPalabras([]);

        const response:CuerpoPalabras[] = 
        partida.Tema === 'Cosas' ? Cosas :
        partida.Tema === 'Acciones' ? Acciones :
        partida.Tema === 'Adjetivos' ? Adjetivos :
        partida.Tema === 'Familia' ? Familia :
        partida.Tema === 'Fechas' ? Fechas :
        partida.Tema === 'Informatica' ? Informatica :
        partida.Tema === 'Numeros' ? Numeros : Cosas

        if(palabras.length === 0){

            if(partida.Tema === '') router.push('/AdivinaLaPalabra/main')
            
            let aux:number[] = []
            let todos:number[] = [];

            response.map((n , i) => {
                todos.push(i);
            })

            if(!partida.Salida){
                //aleatorio
                for(let i = 0; i < partida.Cantidad ; i++){
                    let random = Math.floor(Math.random()*todos.length);
                    aux.push(todos[random]);
                    todos = todos.filter((n , i) => i !== random);
                }
            }
            else if(partida.Salida){
                //comun
                for(let i = 0; i < partida.Cantidad ; i++){
                    aux.push(todos[i]);
                }
            }

            let auxPalabras:Palabras[] = []
            for(let i = 0 ; i < aux.length ; i++){
                auxPalabras.push(
                    {
                        id: i+1,
                        palabraEnEspañol: SacarPalabras(response[aux[i]].es),
                        palabraEnIngles: SacarPalabras(response[aux[i]].en),
                        estado: 0,
                        respuesta: '',
                    }
                )
            }

            setPalabras(auxPalabras);
        }
    }

    const Reiniciar = ():void => {
        setContadores([0,0,0,0])
        setResultadoPalabras([
            {
                'id': 1000,
                'palabraEnIngles': [''],
                'palabraEnEspañol': [''],
                'estado':2,
                'respuesta':'respondido',
            }
        ])
        iniciarPartida()
    }

    const SacarPalabras = (pala:string):string[] =>{
        return pala ? pala.split('/') : [''];
    } 

    const comprobar = ():void => {
        let resp:boolean = false;
        
        if(!partida.OrdernDeIdioma){
            for(let i:number = 0; i < palabras[0].palabraEnEspañol.length; i++){
                respuesta.toLowerCase() === palabras[0].palabraEnEspañol[i].toLowerCase() 
                ? resp = true : ''
            }
        }else{
            for(let i:number = 0; i < palabras[0].palabraEnIngles.length; i++){
                respuesta.toLowerCase() === palabras[0].palabraEnIngles[i].toLowerCase() 
                ? resp = true : ''
            }
        }

        let aux:Palabras[] = palabras;
        let modPalabra:Palabras | undefined = aux.shift();

        if(resp && modPalabra !== undefined) modPalabra.estado = 1;

        if(modPalabra !== undefined) {
            modPalabra.respuesta = respuesta === '' ? '...' : respuesta;
            setResultadoPalabras([modPalabra , ...resultadoPalabras])
        }

        if(resp){
            setContadores([contadores[0] + 1 ,contadores[1] , contadores[2]+1 , contadores[3]+100])
        }else{
            setContadores([contadores[0] + 1 ,contadores[1]+1 , contadores[2] , contadores[3] === 0 ? contadores[3]: contadores[3] - 25 ])
        }

        setRespuesta('');
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
                        <Tablero contadores={contadores} largo={palabras.length} />
                        
                        {/* esta se ejecuta el terminar el juego */}
                        {palabras.length === 0 && 
                        <BarraFinal 
                            palabras={resultadoPalabras} 
                            setSeleccionado={setSeleccionado} 
                            funcion={Reiniciar} 
                        />}

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
                            onClick={(e) => {e.preventDefault() ; comprobar()}}>Comprobar</button>
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
                            <BarrasLaterales palabras={palabras} />
                            <BarrasLaterales 
                                palabras={resultadoPalabras} 
                                setSeleccionado={setSeleccionado} 
                            />
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
                {seleccionado.id !== 1000 &&
                <NubeDeResultado 
                    seleccionado={seleccionado} 
                    setSeleccionado={setSeleccionado} 
                />}
            </div>
    )
}