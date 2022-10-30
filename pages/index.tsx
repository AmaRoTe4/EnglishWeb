import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setMain } from '../store/slice/selecciones/selecciones'

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const { main } = useSelector((state:RootState) => state.selecciones) 

  return (
      <div className='d-flex justify-content-center flex-column oneHundred'
        style={{background:' linear-gradient(to top , rgb(70, 179, 211) , rgb(0, 79, 141))'}}>
        <div className={`${styles.titulo} top-0 start-0`}>
            <p style={{color:'white'}} className="text-center">ENGLISH IN A WEB</p>
        </div>
        <div className={`${styles.contentLiks} centradoColumn`}>
          <div className={`${styles.BoxSupLinks} d-flex`}>
            <div className={`${styles.contentSupLateral} justify-content-start`}>
              <i style={{color:'white'}} className="fa-solid fa-chevron-left m-2 HoverGenerico" 
              onClick={(e) => {e.preventDefault(); dispatch(setMain(main !== 0 ? main-1 : main))}}></i>
            </div>
            {main === 0 ? <Link href='./AdivinaLaPalabra/main'>
              <a className={`${styles.links} centradoColumn`}>Adivina la Palabra</a>
              </Link>
            :main === 1 ? <Link  href='./Teoria/main'>
              <a className={`${styles.links} centradoColumn`}>Teoria</a>
              </Link>
            :main === 2 ? <Link  href='./Translator/main'>
              <a className={`${styles.links} centradoColumn`}>Traductor</a>
              </Link> : ''}
            <div className={`${styles.contentSupLateral} justify-content-end`}>
              <i style={{color:'white'}} className="fa-solid fa-chevron-right m-2 HoverGenerico"
              onClick={(e) => {e.preventDefault(); dispatch(setMain(main !== 2 ? main+1 : main))}}></i>
            </div>
          </div>
          <div className={`${styles.BoxInfeLinks}`}>
            <div className="centradoPorBetween" style={{width: '100px' }}>
              <span className={`${styles.minBtn} HoverGenerico`}
              onClick={(e) => {e.preventDefault(); {main !== 0 ? dispatch(setMain((0))) : '' }}}
              style={{backgroundColor: `${main === 0 ? 'red' : ''}`}}>
              </span>
              <span className={`${styles.minBtn} HoverGenerico`}
              onClick={(e) => {e.preventDefault(); {main !== 1 ? dispatch(setMain(1)) : ''}}}
              style={{backgroundColor: `${main === 1 ? 'red' : ''}`}}>
              </span>
              <span className={`${styles.minBtn} HoverGenerico`}
              onClick={(e) => {e.preventDefault(); {main !== 2 ? dispatch(setMain(2)) : ''}}}
              style={{backgroundColor: `${main === 2 ? 'red' : ''}`}}>
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home