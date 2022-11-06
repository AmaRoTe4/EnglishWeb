import styles from '../../styles/HomeWorks.module.css'
import { useEffect, useState } from 'react'
import { FormDePalabrasAPd  , FormDePalabrasEspIng , FormDePalabrasTodos} from './Components/main/Inputs'
//import Link from 'next/link'
import { setJuego } from '../../store/slice/juegos/juego'
import { useDispatch } from 'react-redux'
import { DataJuego } from '../../interfaces'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Main(){
  const router = useRouter()
  const dispatch = useDispatch();
  //el primero es todos/cantidad el segundo es Pordefecto/aleatorio
  const [valores , setValores] = useState<boolean[]>([true , true  ,true])
  const [tema, setTemas] = useState<string>('Cosas')
  const [cantidadDePalabras, setCantidadDePalabras] = useState<number>(0)
  const numeracion:string[] = [
    'Acciones' , 
    'Adjetivos' , 
    'Cosas' , 
    'Familia' , 
    'Informatica' , 
    'Numeros',
    'Fechas', 
  ] 

  useEffect(() => {
    InicirJuego(0)
  },[])

  const asignarTema = (n:string) => {
    setTemas(n);
    let aux:number = 0
    n === 'Cosas' ? aux = 286 :
    n === 'Acciones' ? aux = 155 :
    n === 'Adjetivos' ? aux = 97 :
    n === 'Familia' ? aux = 18 :
    n === 'Numeros' ? aux = 58 :
    n === 'Fechas' ? aux = 44 :
    n === 'Informatica' ? aux = 80 : 0
    setCantidadDePalabras(aux);
  }

  const InicirJuego = (accion:number):void =>{
    const partida:DataJuego = {
      Tema: tema,
      Salida: valores[1],
      OrdernDeIdioma: valores[2],
      Total: valores[0],
      Cantidad:
      tema === 'Acciones' && cantidadDePalabras > 155 ? 155 : 
      tema === 'Adjetivos' && cantidadDePalabras > 97 ? 97: 
      tema === 'Cosas' && cantidadDePalabras > 286 ? 286 :
      tema === 'Familia' && cantidadDePalabras > 18 ? 18 : 
      tema === 'Informatica' && cantidadDePalabras > 80 ? 80 :
      tema === 'Numeros' && cantidadDePalabras > 58 ? 58 : 
      tema === 'Fechas' && cantidadDePalabras > 44 ? 44 : cantidadDePalabras 
    }

    dispatch( setJuego(partida))

    //condicional
    const retorno:boolean = ((!valores[0] && cantidadDePalabras > 0) || valores[0])
    
    if(accion !== 0 && retorno) {
      router.push('/AdivinaLaPalabra/juego')
    }
  }

  return (
    <div className={`${styles.BoxMainJuego} oneHundred`}
      style={{ 
        backgroundColor: "rgb(65, 65, 65)",
        color:'white'
      }}>
      <div className='position-absolute top-0 end-0 mt-3 me-4 HoverGenerico'>
        <Link href="/" className='oneHundredPC'>
          <i className="fa-solid fa-house"></i>
        </Link>
      </div>
      <div className={`${styles.lateral}`}>
          <div className={`${styles.TituloDeTemas} centradoPorDefecto`}>
            Temas
          </div>
          <ul className={`${styles.LateralSup}`}>
            {numeracion.map((n, i) => (
              <li 
              key={i} 
              className={`${styles.IdLista} centradoPorDefecto text-break HoverGenerico`}
              onClick={e => {e.preventDefault() ; asignarTema(n)}}>
              {n}</li>
            ))}
          </ul>
          <div className={`${styles.lateralInf} d-flex flex-column align-items-center justify-content-end `}>
            <div className={`${styles.subTituloLateral} centradoPorDefecto`}>
              Salida De Palabras
            </div>
            <FormDePalabrasAPd  
              valores={valores} 
              setValores={setValores}
            />
            <div className={`${styles.subTituloLateral} centradoPorDefecto`}>
              Idioma De Validacion
            </div>
            <FormDePalabrasEspIng
              valores={valores} 
              setValores={setValores}
            />
            <div className={`${styles.subTituloLateral} centradoPorDefecto`}>
              Cantidad De Palabras
            </div>
            <FormDePalabrasTodos
              setCantidadDePalabras={setCantidadDePalabras}
              cantidadDePalabras={cantidadDePalabras}  
              valores={valores} 
              setValores={setValores}/>
          </div>
      </div>
      <div className={`${styles.centro} oneHundredPC }`}>
        <div className={`${styles.boxTituloPedido} centradoPorDefecto`}>
            Pedido De Palabras
        </div>
        <div className={`${styles.boxPedido} row d-flex justify-content-center`}>
          <div className={`${styles.temas} col-md-5 col-8 centradoColumn`}>
            <div className={`${styles.TituloTemas} centradoColumn`}>
              Tema
            </div>
            <div className={`${styles.BoxTemas} centradoColumn`}>
              {tema}
            </div>
          </div>
          <div className={`${styles.temas} col-md-5 col-8 centradoColumn`}>
            <div className={`${styles.TituloTemas} centradoColumn`}>
              Valores
            </div>
            <div className={`${styles.BoxTemas} centradoColumn`}>
              {valores[1] ? ' Por Defecto' : ' Aleatorio'}
            </div>
          </div>
          <div className={`${styles.temas} col-md-5 col-8 centradoColumn`}>
            <div className={`${styles.TituloTemas} centradoColumn`}>
              Cantidad
            </div>
            <div className={`${styles.BoxTemas} centradoColumn`}>
              {valores[2] ? ' Español - Ingles' : ' Ingles - Español'}
            </div>
          </div>
          <div className={`${styles.temas} col-md-5 col-8 centradoColumn`}>
            <div className={`${styles.TituloTemas} centradoColumn`}>
              Cantidad
            </div>
            <div className={`${styles.BoxTemas} centradoColumn`}>
              {valores[0] ? ' Todos' : cantidadDePalabras}
            </div>
          </div>
        </div>
        <div className={`${styles.boxBtnPedido} centradoPorDefecto mt-5`}>
          <button className='btn btn-primary' type="button" 
          onClick={(e) => {e.preventDefault(); InicirJuego(1)}}
          style={{width:'50%'}}>
              EMPEZAR
          </button>
        </div>
      </div>
    </div>
  )
}
