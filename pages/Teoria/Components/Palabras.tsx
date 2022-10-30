import styles from '../../styles/Teoria.module.css'
import Abecedario from '../../../Data/Teoria/Abcedario.json'
import PalabrasMasComunes from '../../../Data/Teoria/PalabrasMasComunes.json'
import Numeros from '../../../Data/Teoria/Numeros.json'
import DiasYMeses from '../../../Data/Teoria/DiasYMeses.json'
import Colores from '../../../Data/Teoria/Colores.json'
import FigurasGeometricas from '../../../Data/Teoria/FigurasGeometricas.json'
import PartesDelCuerpo from '../../../Data/Teoria/PartesDelCuerpo.json'
import Familia from '../../../Data/Teoria/Familia.json'
import Pronombres from '../../../Data/Teoria/Pronombres.json'
import Profesiones from '../../../Data/Teoria/Profesiones.json'
import { useEffect, useState } from 'react';
//import Link from 'next/link'

interface Props{
    id:string
}

interface CuerpoPalabras{
    spanish:string,
    english:string,
    pronunciation:string,
}

export function Palabras({id}:Props):JSX.Element{
    //const auxData:CuerpoPalabras[] = 
    //id === 'Palabras más comunes' ? PalabrasMasComunes : 
    //id === 'El abecedario' ? Abecedario :
    //id === 'Los números cardinales y ordinales' ? Numeros :
    ////adaptar
    //id === 'Días de la semana y meses del año' ? DiasYMeses : 
    //id === 'Los colores' ? Colores : 
    //id === 'Figuras geométricas' ? FigurasGeometricas : 
    //id === 'Las partes del cuerpo' ? PartesDelCuerpo : 
    //id === 'La familia' ? Familia : 
    //id === 'Las profesiones' ? Profesiones : 
    //id === 'Los pronombres personales' ? Pronombres : Pronombres 


    const [data , setData] = useState<CuerpoPalabras[][]>([[]])

    useEffect(() => {
        let aux:CuerpoPalabras[][] = [] 
        
        //if(id !== 'Días de la semana y meses del año'){

        //    for(let i = 0; i < auxData.length; i+=10){
        //        aux.push([])
        //        for(let j = 0; j < 10; j++){
        //            if(auxData[j+i]) aux[i/10][j] = auxData[j+i]
        //        }
        //    }

        //}else{
        //    aux.push([],[])

        //    for(let i = 0; i < auxData.length; i++){
        //        if(i < 12 && auxData[i]){
        //            aux[0][i] = auxData[i]
        //        } 
        //        else if(auxData[i]) {
        //            aux[1][i-12] = auxData[i]
        //        }
        //    }
        //}
        setData(aux);
    },[])

    return (
        <div className={`${styles.Contain} oneHundred d-flex flex-column justif-content-center`}> 
            <div className={`${styles.boxPalabras}`}>
                <div className={`${styles.boxInterSupPalabras} centradoColumn`}>
                    <h3 className='text-center m-4'>{id}</h3>
                </div>
                <div className={`${styles.boxInterInfPalabras}`}>
                    {data.map((n , i) => 
                        <div className={`${styles.Pilar}`} key={i}>
                            <ul className={`${styles.UlList}`}>
                                <li className={`${styles.LiList} ${styles.TitleList} centradoColumn`}
                                style={{borderTopLeftRadius: '4px'}}>
                                    {id === 'Los números cardinales y ordinales' ? 'Value' : 'Spanish'}
                                </li>
                                <li className={`${styles.LiList} ${styles.TitleList} centradoColumn`}
                                style={{borderLeft: '0px' , borderRight: '0px'}}>
                                    English
                                </li>
                                <li className={`${styles.LiList} ${styles.TitleList} centradoColumn`}
                                style={{borderTopRightRadius: '4px'}}>
                                    Pronunciation
                                </li>
                            </ul>
                            {n.map((m ,y) => 
                                <ul className={`${styles.UlList}`} key={y}>
                                    <li className={`${styles.LiList} centradoColumn`}>
                                        {m.spanish}
                                    </li>
                                    <li className={`${styles.LiList} centradoColumn`}>
                                        {m.english}
                                    </li>
                                    <li className={`${styles.LiList} centradoColumn`}>
                                        {m.pronunciation}
                                    </li>
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}