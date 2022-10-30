import styles from '../../styles/Teoria.module.css'
import { CuadroDeTeoria } from './CuadroDeTeoria'
//import PresenteSimple from '../../Data/Teoria/PresenteSimple.json'
import { useEffect, useState } from 'react';
import Link from 'next/link'

//presente simple
//presente continuo

interface Props{
    id:string
    text:string[];
}

interface CuerpoPalabras{
    affirmative:string,
    negative:string,
    interrogative:string,
}

export function Conjugaciones({id , text}:Props):JSX.Element{
    //const auxData:CuerpoPalabras[] = PresenteSimple

    return (
        <div className={`${styles.ContainConText} centradoColumn`}>
            <h1 style={{color: 'white' , marginBottom:'50px' , marginTop:'20px'}}>{id.toLowerCase()}</h1>
            {text.map((n , i) => 
                <CuadroDeTeoria key={i} text={n} />
            )}
            {id === 'Presente simple' && 
            <div className={`${styles.Pilar}`}>
                <ul className={`${styles.UlList}`}>
                    <li className={`${styles.LiList} ${styles.TitleList} centradoColumn`}
                    style={{borderTopLeftRadius: '4px'}}>
                        Affirmative
                    </li>
                    <li className={`${styles.LiList} ${styles.TitleList} centradoColumn`}
                    style={{borderLeft: '0px' , borderRight: '0px'}}>
                        Negative
                    </li>
                    <li className={`${styles.LiList} ${styles.TitleList} centradoColumn`}
                    style={{borderTopRightRadius: '4px'}}>
                        Interrogative
                    </li>
                </ul>
                {/*{auxData.map((m ,y) => 
                    <ul className={`${styles.UlList}`} key={y}>
                        <li className={`${styles.LiList} centradoColumn`}>
                            {m.affirmative}
                        </li>
                        <li className={`${styles.LiList} centradoColumn`}>
                            {m.negative}
                        </li>
                        <li className={`${styles.LiList} centradoColumn`}>
                            {m.interrogative}
                        </li>
                    </ul>
                )}*/}
            </div>}
        </div>
    )
}