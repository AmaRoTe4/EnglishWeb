import styles from '../../styles/Teoria.module.css'
import { useState } from 'react'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setTheory } from '../../store/slice/selecciones/selecciones'


export default function Main(){
  const dispatch = useDispatch()
  const { theory } = useSelector((state:RootState) => state.selecciones) 
  const [articulos] = useState<string[][]>([
    [ 
      'El abecedario',
      'Palabras más comunes',
      'Los números cardinales y ordinales',
      'Días de la semana y meses del año',
      'Los colores',
      'Figuras geométricas',
      'Las partes del cuerpo',
      'Los pronombres personales',
      'La familia',
      'Fraces tipicas',
      'Las profesiones',
      'Presente simple',
      'Presente continuo'
    ],
    [
      'Adverbios de lugar',
      'Preposiciones de lugar',
      'Preposiciones de tiempo: for y since',
      'Adjetivos calificativos',
      'Adjetivos demostrativos',
      'Adjetivos comparativos',
      'Adjetivos de cantidad',
      'Las partes de la casa',
      'Vocabulario de restaurante',
      'Hablar sobre las emociones en inglés: like y dislike',
      'Pasado simple: verbos regulares e irregulares',
      'Pasado continuo',
      'Verbos auxiliares: do, does, has, have',
      'WH Questions',
      'Adverbios de frecuencia',
    ],
    [
      'Preposiciones de tiempo',
      'Conectores',
      'Artículos',
      'Patrones verbales o Verb patterns',
      'Diferencias entre palabras similares',
      'Verbos modales',
      'Pronombres posesivos',
      'Pronombres reflexivos',
      'Apóstrofo de posesión',
      'Futuro simple',
      'Futuro continuo',
      'Condicionales',
      'Tiempos perfectos',
    ],
    [
      'Conectores avanzados o Sentence Conectors',
      'Adjetivos -ed y -ing',
      'Verbo “to need”',
      'Verbo “to wish” ',
      'Phrasal Verbs',
      'Pronombres indefinidos',
      'Voz activa y pasiva',
      'Verbos transitivos e intransitivos',
      'Reported speech',
      'Cláusulas relativas o Relative Clauses',
      'Discurso directo e indirecto',
    ]
  ])
  //const [seleccionado , setSeleccionado] = useState<number>(0)

  return (
    <div className={`${styles.boxMain} d-flex flex-column justify-content-center`}>
      <div className='HoverGenerico position-absolute top-0 end-0 mt-3 me-3'>
        <Link href="/">
            <i className="fa-solid fa-house" style={{color:'white'}}></i>
        </Link>
      </div>
      <div className={`${styles.titulo} centradoColumn m-3`}>
        <p className={`${styles.textTitulo}`}>Teoria</p>
      </div>
      <div className={`${styles.contentGeneral} centradoColumn`}>
        {
          articulos.map((n ,i) => 
          theory === i + 1 ? 
            <div key={i} className={`${styles.boxDeTemas} d-flex justify-content-center m-3 h-75 border border-light`}>
              <h2 className='col-12 p-2 centradoColumn HoverGenerico border-light border-bottom'
              onClick={e => {e.preventDefault() ; dispatch( setTheory(0))}} style={{color:"white"}}>
                {i === 0 ? 'A1' : 
                 i === 1 ? 'A2' : 
                 i === 2 ? 'B1' : 
                 i === 3 ? 'B2' : ''}
              </h2>
              {/* aca esta el condicional de los temas */}
              {i === 0 && n.map((m , y) => 
                <Link href={`Temas/${m}`} key={y} onClick={(e) => {e.preventDefault()}}>
                  <div className={`${styles.temas} HoverGenerico text-center centradoPorDefecto`}>
                    <p style={{margin:'15px'}}>{m}</p>
                  </div>
                </Link>
              )}
            </div> :
            <div key={i} className={`${styles.TemasEncapsulados} HoverGenerico m-3 h-75 border border-light`}
            onClick={e => {e.preventDefault() ;dispatch(  setTheory(i+1))}} style={{color:"white"}}>
            <h2 className='col-12 text-center mt-2'>
              {i === 0 ? 'A1' : 
               i === 1 ? 'A2' : 
               i === 2 ? 'B1' : 
               i === 3 ? 'B2' : ''}
            </h2>
          </div>
          )
        }
      </div>
    </div>
  )
}
