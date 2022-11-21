import styles from '../../styles/AdiLaPalMain.module.css'
import { useState } from 'react'
import { FormDePalabrasAPd  , FormDePalabrasEspIng , FormDePalabrasTodos} from '../../components/AdivinaLaPalabra/main/Inputs'
import { setJuego } from '../../store/slice/juegos/juego'
import { asignarValor, DataPartida } from '../../functions/AdivinaLaPalabra/main/index'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import Link from 'next/link'

const numeracion:string[] = [
	'Acciones' , 
	'Adjetivos' , 
	'Cosas' , 
	'Familia' , 
	'Informatica' , 
	'Numeros',
	'Fechas', 
] 

export default function Main(){
	const router = useRouter()
	const dispatch = useDispatch();
	//el primero es todos/cantidad el segundo es Pordefecto/aleatorio
	const [valores , setValores] = useState<boolean[]>([true , true  ,true])
	const [tema, setTemas] = useState<string>('Acciones')
	const [cantidadDePalabras, setCantidadDePalabras] = useState<number>(100)

	const InicirJuego = ():void =>{
		if(!valores[0] && cantidadDePalabras <= 0) {
			Swal.fire({
				title: 'Error!',
				text: 'La cantidad de palabras es inferior a la minima...',
				icon: 'warning',
				confirmButtonText: 'Ok'
			})
			return
		} 

		dispatch( setJuego(DataPartida(tema , valores , asignarValor(cantidadDePalabras , tema))))
		router.push('/AdivinaLaPalabra/juego')
	}

	return (
    	<div className={`${styles.BoxMainJuego}`}
			style={{ 
    	    	backgroundColor: "rgb(65, 65, 65)",
    	    	color:'white'
			}}>

    	    <nav className={`${styles.BoxTitulo}`}>
    	        <div className={`${styles.Titulo}`}>
    	            <h1 className="mt-2">Adivina la Palabra</h1>
    	        </div>
    	        <div className={`${styles.BoxBtnVolver} centradoPorDefecto HoverGenerico`}>
    	            <Link href="/">
    	                <i className="fa-solid fa-house"></i>
    	            </Link>
    	        </div>
    	    </nav>

			<section className={`${styles.BoxTemas} ${styles.BoxG}`}>
				<div className={`${styles.TituloTemas} centradoPorDefecto`}>
					<h3 className="text-center">Temas</h3>
				</div>
				<ul className={`${styles.listaTemas}`}>
					{numeracion.map((n, i) => (
						<li 
							key={i} 
							className=
							{`${styles.IdLista}
							${tema === n ? styles.temaSelect : ''}
							${i === (numeracion.length - 1) ? styles.BorBotCur : ""}
							centradoPorDefecto text-break HoverGenerico`}
							onClick={e => {
								e.preventDefault() ; 
								setTemas(n);
								setCantidadDePalabras(asignarValor(cantidadDePalabras , n))
							}}>
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

			<footer className={`${styles.boxbtnEmpezar} centradoPorDefecto`}>
				<button 
					className={`${styles.btnEmpezar} btn`} 
					type="button" 
					onClick={(e) => {e.preventDefault(); InicirJuego()}}
				>
					EMPEZAR
				</button>
			</footer>
      </div>
	)
}