import { configureStore } from '@reduxjs/toolkit'
import Juego from './slice/juegos/juego' 
//import GeneralData from './slice/generalData/generalData' 
import Selecciones from './slice/selecciones/selecciones' 

export const store = configureStore({
  reducer: {
    juego: Juego,
    //generalData:GeneralData,
    selecciones:Selecciones
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
