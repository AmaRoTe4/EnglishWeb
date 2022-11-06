import styles from '../../../../styles/HomeWorks.module.css'
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
        <div className="d-flex flex-column">
          <label className='ms-1 text-center'>Por Defecto</label>
          <label className='ms-1 text-center'>Aleatorio</label>
        </div>
        <div className="d-flex flex-column ms-3">            
          <input className={`${styles.chebox} m-1`} 
            checked={valores[1]} 
            id="PorDef" 
            name="btnSalida" 
            type="radio"
            onChange={e => { 
                setValores([valores[0] ,true , valores[2] ]) 
            }} />
          <input className={`${styles.chebox} m-1`} 
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
        <div className="d-flex flex-column">
          <label className='ms-1 text-center'>Español - Ingles</label>
          <label className='ms-1 text-center'>Ingles - Español</label>
        </div>
        <div className="d-flex flex-column ms-3">            
          <input className={`${styles.chebox} m-1`} 
            checked={valores[2]} 
            id="PorDef" 
            name="btnSalida" 
            type="radio"
            onChange={e => { 
                setValores([valores[0] ,valores[1] , true ]) 
            }} />
          <input className={`${styles.chebox} m-1`} 
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
        <div className="d-flex flex-column">
          <label className='ms-1 text-center'>Todas</label>
          <label className='ms-1 text-center'>Cantidad</label>
        </div>
        <div className="d-flex flex-column ms-3">            
          <input className={`${styles.chebox} m-1`} 
            checked={valores[0]} 
            id="PorDef" 
            name="btnSalida" 
            type="radio"
            onChange={e => { 
                setValores([true ,valores[1] , valores[2] ]) 
            }} />
          <input className={`${styles.chebox} m-1`} 
              checked={!valores[0]} 
              id="Alea" name="btnSalida" type="radio"
              onChange={e => {  
                  setValores([false, valores[1]  ,valores[2]])   
          }} />
        </div>
        <input type='number' disabled={valores[0]} value={cantidadDePalabras}  
            style={{border: 'none' , width: '50px' , marginLeft:'5px'}} 
            onChange={e => {setCantidadDePalabras !== undefined ? setCantidadDePalabras(parseInt(e.target.value)) : ''}}
            min={0}
            //max={tema === 'Acciones' ? 155 : 
            //tema === 'Adjetivos' ? 97 : 
            //tema === 'Cosas' ? 286 :
            //tema === 'Familia' ? 18 : 
            //tema === 'Informatica' ? 80 :
            //tema === 'Numeros' ? 58 :
            //tema === 'Fechas' ? 44 : 0 }
        />
      </form>
    )
}