import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setMain } from '../store/slice/selecciones/selecciones'

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const { main } = useSelector((state:RootState) => state.selecciones) 

  return (
      <div className='d-flex justify-content-center flex-column oneHundred'
        style={{background:' linear-gradient(to top , rgb(70, 179, 211) , rgb(0, 79, 141))'}}>
        <div className={`${styles.mainTitulo}`}>
            <h1 style={{color:'white'}} className="text-center">ENGLISH IN A WEB</h1>
        </div>

        <div className={`${styles.contentLiks} BoxLinks centradoColumn`}>
          <div className={`${styles.BoxSupLinks} d-flex`}>
            <div className={`${styles.contentSupLateral} justify-content-start`}>
              <i 
                className={`${styles.Iflecha} fa-solid fa-chevron-left m-2 HoverGenerico`} 
                onClick={(e) => {e.preventDefault(); dispatch(setMain(main !== 0 ? main-1 : main))}}>
              </i>
            </div>

            {main === 0 
            ? <Link href='./AdivinaLaPalabra/main'>
                <a className={`${styles.links} centradoColumn`}>Adivina la Palabra</a>
              </Link> : main === 1 
            ? <Link  href='./Translator/main'>
                <a className={`${styles.links} centradoColumn`}>Traductor</a>
              </Link> : ''}

            <div className={`${styles.contentSupLateral} justify-content-end`}>
              <i 
                className={`${styles.Iflecha} fa-solid fa-chevron-right m-2 HoverGenerico`}
                onClick={(e) => {e.preventDefault(); dispatch(setMain(main !== 1 ? main+1 : main))}}>
              </i>
            </div>
          </div>
          <div className={`${styles.BoxInfeLinks} BoxLinks`}>
            <div className="centradoPorBetween" style={{width: '40px'}}>
              <span 
                className={`${styles.minBtn} HoverGenerico`}
                onClick={(e) => {e.preventDefault(); {main !== 0 ? dispatch(setMain((0))) : '' }}}
                style={{backgroundColor: `${main === 0 ? 'red' : ''}`}}>
              </span>
              <span 
                className={`${styles.minBtn} HoverGenerico`}
                onClick={(e) => {e.preventDefault(); {main !== 1 ? dispatch(setMain(1)) : ''}}}
                style={{backgroundColor: `${main === 1 ? 'red' : ''}`}}>
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home