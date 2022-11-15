import styles from '../../styles/AdivinaLaPalabra.module.css'
import { useEffect, useState } from 'react'
import { FormDePalabrasAPd  , FormDePalabrasEspIng , FormDePalabrasTodos} from '../../components/AdivinaLaPalabra/main/Inputs'
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
    	<div className={`${styles.BoxMainJuego}`}
			style={{ 
    	    	backgroundColor: "rgb(65, 65, 65)",
    	    	color:'white'
			}}>
    	    <div className={`${styles.BoxTitulo}`}>
    	        <div className={`${styles.Titulo}`}>
    	            <h1>Adivina la Palabra</h1>
    	        </div>
    	        <div className={`${styles.BoxBtnVolver} centradoPorDefecto HoverGenerico`}>
    	            <Link href="/">
    	                <i className="fa-solid fa-house"></i>
    	            </Link>
    	        </div>
    	    </div>
			<section className={`${styles.BoxTemas} ${styles.BoxG}`}>
				<div className={`${styles.TituloTemas} centradoPorDefecto`}>
					<h3 className="text-center">Temas</h3>
				</div>
				<ul className={`${styles.listaTemas}`}>
					{numeracion.map((n, i) => (
						<li 
							key={i} 
							className={`${styles.IdLista} ${tema === n ? styles.temaSelect : ''} centradoPorDefecto text-break HoverGenerico`}
							onClick={e => {e.preventDefault() ; asignarTema(n)}}>
							{n}
						</li>
					))}
				</ul>
			</section>

			<section className={`${styles.boxConfig} ${styles.BoxG}`}>
				<div className={`${styles.TituloTemas} centradoPorDefecto`}>
					<h3 className="text-center p-2" style={{color:'white'}}>Configuraciones</h3>
				</div>
				<FormDePalabrasAPd  
					valores={valores} 
					setValores={setValores}
				/>
				<FormDePalabrasEspIng
					valores={valores} 
					setValores={setValores}
				/>
				<FormDePalabrasTodos
					setCantidadDePalabras={setCantidadDePalabras}
					cantidadDePalabras={cantidadDePalabras}  
					valores={valores} 
					setValores={setValores}
				/>
			</section>

			<div className={`${styles.boxbtnEmpezar} centradoPorDefecto`}>
				<button 
					className={`${styles.btnEmpezar} btn`} 
					type="button" 
					onClick={(e) => {e.preventDefault(); InicirJuego(1)}}
				>
					EMPEZAR
				</button>
			</div>
      </div>
	)
}