import { configureStore } from '@reduxjs/toolkit'
import Juego from './slice/juegos/juego'  
import Selecciones from './slice/selecciones/selecciones' 

export const store = configureStore({
  reducer: {
    juego: Juego,
    selecciones:Selecciones
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
