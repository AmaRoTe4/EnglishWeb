import styles from '../../../styles/Teoria.module.css'
import FrasesComunes from '../../../Data/Teoria/FrasesComunes.json'

interface Props{
    id:string
}

interface CuerpoPalabras{
    spanish:string,
    english:string,
    pronunciation:string,
}

export function Frases({id}:Props):JSX.Element{
    //const auxData:CuerpoPalabras[] = FrasesComunes

    return (
        <div className={`${styles.Contain} oneHundred d-flex flex-column justif-content-center`}> 
            <div className={`${styles.boxPalabras}`}>
                <div className={`${styles.boxInterSupPalabras} centradoColumn`}>
                    <h3 className='text-center'>{id}</h3>
                </div>
                <div className={`${styles.boxInterInfPalabras}`}>
                    {/*{auxData.map((n , i) => 
                        <div className={`${styles.Pilar}`} key={i}
                        style={{width:"40%"}}>
                                <ul className={`${styles.UlList}`}>
                                    <li className={`centradoColumn`} 
                                    style={{color:"white" , minHeight:'50px' , textAlign:'center' , margin:'10px'}}>
                                        {n.spanish}
                                    </li>
                                    <li className={`centradoColumn`} 
                                    style={{color:"white" , minHeight:'50px' , textAlign:'center' , margin:'10px'}}>
                                        {n.english}
                                    </li>
                                </ul>
                        </div>
                    )}*/}
                </div>
            </div>
        </div>
    )
}