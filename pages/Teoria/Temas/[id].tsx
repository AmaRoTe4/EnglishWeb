import { useRouter } from 'next/router'
//import { useEffect } from 'react';
import { Palabras } from '../Components/Palabras'
import { Conjugaciones } from '../Components/Conjugaciones'
import { Frases } from '../Components/Frases'
import Link from 'next/link';

//temas que faltan
    //como saludar y presentarse

const presenteSimple:string = 'El presente simple, junto con el presente perfecto y el presente continuo, es una de las tres formas del presente que existen en inglés. Se escribe tomando la forma base del verbo para los pronombres I, you, we y they; y se le agrega una –s para la tercera persona del singular it, she y he'

const presenteContinuo:string = 'El presente continuo se utiliza para hablar sobre algo que está pasando en el momento en el que hablamos. Con el verbo to be en presente simple (am, is, are) más el verbo principal en gerundio (terminado en –ing).'

export default function Temas():JSX.Element{
    const router = useRouter();
    const { id } = router.query;

    return (
        <div style={{backgroundColor: 'rgb(55, 55, 55)'}}>
            
            <div className='position-absolute mt-3 me-4 top-0 end-0 HoverGenerico'
            style={{
              marginTop:'10px',
              color:'rgb(255, 255, 255)'
            }}>
              <Link href="/Teoria/main">
                <i className="fa-solid fa-house"></i>
              </Link>
            </div>

            {typeof(id) === 'string' && 
            (id === "Los colores" || 
            id === "Días de la semana y meses del año" ||
            id === "Los números cardinales y ordinales" || 
            id === "El abecedario" ||
            id === 'Figuras geométricas' ||
            id === 'Las partes del cuerpo' ||
            id === 'La familia' ||
            id === 'Las profesiones' ||
            id === 'Palabras más comunes' ||
            id === 'Los pronombres personales') &&
            <Palabras id={id} />}
            
            {typeof(id) === 'string' && id === 'Presente simple' && <Conjugaciones id={id} text={[presenteSimple]} />}

            {typeof(id) === 'string' && id === 'Presente continuo' && <Conjugaciones id={id} text={[presenteContinuo , 'Sujeto + am | is | are + verbo acabado en -ing']} />}

            {typeof(id) === 'string' && id === 'Fraces tipicas' && <Frases id={id} />}
        </div>
    )
}