import styles from '../../../styles/HomeWorks.module.css'
import { Dispatch, SetStateAction } from 'react'

interface FormInter {
    valores:Array<boolean>;
    setValores:Dispatch<SetStateAction<boolean[]>>;
    elemento: JSX.Element | undefined;
    textos: string[];
}

export function 
FormDePalabras({valores , setValores , elemento=undefined , textos}:FormInter):JSX.Element{
    if(valores.length === 3 && textos.length === 2){
        return (
          <form className={`${styles.formularioPalabras}`}>
            <div className="d-flex flex-column">
              <label className='ms-1 text-center'>{textos[0]}</label>
              <label className='ms-1 text-center'>{textos[1]}</label>
            </div>
            <div className="d-flex flex-column ms-3">            
              <input className={`${styles.chebox} m-1`} checked={
               textos[0] === 'Español - Ingles' ?
               valores[2] : elemento ? valores[0] : valores[1]} 
              id="PorDef" name="btnSalida" type="radio"
              onChange={e => {
                {textos[0] === 'Español - Ingles' ?
                setValores([valores[0] ,valores[1] , true ]) :
                elemento ? setValores([true  ,valores[1] , valores[2] ]) : 
                setValores([valores[0] ,true , valores[2] ]) 
                }}}/>
              <input className={`${styles.chebox} m-1`} checked={
               textos[0] === 'Español - Ingles' ?
               !valores[2] : elemento ? !valores[0] : !valores[1]} 
              id="Alea" name="btnSalida" type="radio"
              onChange={e => {  
                {textos[0] === 'Español - Ingles' ?
                setValores([valores[0] ,valores[1] , false ]) :
                elemento ? setValores([false,valores[1] , valores[2] ]) :
                setValores([valores[0] ,false, valores[2] ])   
              }}}/>
            </div>
            {elemento}
          </form>
        )
    }else{
        return (
            <></>
        )
    }
}
