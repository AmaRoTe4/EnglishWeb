import styles from '../../../styles/AdiLaPalMain.module.css'
import { Dispatch, SetStateAction } from 'react'

interface FormInter {
    valores:boolean[];
    setValores:Dispatch<SetStateAction<boolean[]>>;
    setCantidadDePalabras?:Dispatch<SetStateAction<number>>;
    cantidadDePalabras?:number;
}

export function 
FormDePalabrasAPd({valores , setValores}:FormInter):JSX.Element{
    return (
      	<form className={`${styles.formularioPalabras}`}>
			<div className={`${styles.tituloInputs}`}>
				<h4 className={`text-center`}>Formato de Salida</h4>
			</div>
        	<div className={`${styles.boxInputs} centradoPorDefecto`}>
				<label className={`${styles.label} text-center`}>Por Defecto</label>
				<input 
            		checked={valores[1]} 
            		id="PorDef" 
            		name="btnSalida" 
            		type="radio"
            		onChange={e => { 
            		    setValores([valores[0] ,true , valores[2] ]) 
            		}} />
        	</div>
        	<div className={`${styles.boxInputs} centradoPorDefecto`}
				style={{borderBottom:'solid 1px black'}}>
          		<label className={`${styles.label} text-center`}>Aleatorio</label>         
          		<input 
					checked={!valores[1]} 
          		    id="Alea" name="btnSalida" type="radio"
          		    onChange={e => {  
          		        setValores([valores[0] , false , valores[2]])   
          		}} />
        	</div>
      </form>
    )
}

export function 
FormDePalabrasEspIng({valores , setValores}:FormInter):JSX.Element{
    return (
      <form className={`${styles.formularioPalabras}`}>
		<div className={`${styles.tituloInputs} centradoPorDefecto`}>
			<h4 className={`text-center`}>Traduccion</h4>
		</div>
        <div className={`${styles.boxInputs} centradoPorDefecto`}>
          <label className={`${styles.label} text-center`} style={{width:150}}>Español - Ingles</label>
          <input
            checked={valores[2]} 
            id="PorDef" 
            name="btnSalida" 
            type="radio"
            onChange={e => { 
				setValores([valores[0] ,valores[1] , true ]) 
            }} />
		</div>
		<div className={`${styles.boxInputs} centradoPorDefecto`}
			style={{borderBottom:'solid 1px black'}}>
		<label className={`${styles.label} text-center`} style={{width:150}}>Ingles - Español</label>
          <input 
              checked={!valores[2]} 
              id="Alea" name="btnSalida" type="radio"
              onChange={e => {  
                  setValores([valores[0] , valores[1]  , false])   
          }} />
        </div>
      </form>
    )
}

export function 
FormDePalabrasTodos({valores , setValores , setCantidadDePalabras , cantidadDePalabras}:FormInter):JSX.Element{
    return (
      <form className={`${styles.formularioPalabras}`}> 
		<div className={`${styles.tituloInputs} centradoPorDefecto`}>
			<h4 className={`text-center`}>Cantidad</h4>
		</div>
		<div className={`${styles.boxInputs} centradoPorDefecto`}>
        	<label className={`${styles.label} text-center`}>Todas</label>
			<input 
            checked={valores[0]} 
            id="PorDef" 
            name="btnSalida" 
            type="radio"
            onChange={e => { 
                setValores([true ,valores[1] , valores[2] ]) 
            }} />
			<input type='number' disabled={true}  
				style={{border: 'none' , width: '50px' , marginLeft:'15px' , color:'white'}}
			/>
		</div>
        <div className={`${styles.boxInputs} centradoPorDefecto`}>
          
			<label className={`${styles.label} text-center`}>Cantidad</label>
          	<input 
              	checked={!valores[0]} 
              	id="Alea" name="btnSalida" type="radio"
              	onChange={e => {  
					setValores([false, valores[1]  ,valores[2]])   
          	}} />
			<input type='number' disabled={valores[0]} value={cantidadDePalabras}  
				style={{border: 'none' , width: '50px' , marginLeft:'15px'}} 
				onChange={e => {setCantidadDePalabras !== undefined ? setCantidadDePalabras(parseInt(e.target.value)) : ''}}
				min={1}
			/>
        </div>
      </form>
    )
}