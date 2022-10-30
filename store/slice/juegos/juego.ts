import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DataJuego } from '../../../interfaces'

export const JuegoSlice = createSlice({
    name: 'Juego',
    initialState: {
      partida:{
        Tema:'',
        Salida:true,
        OrdernDeIdioma:true,
        Total:true,
        Cantidad:0,
      }
    },
    reducers: {
      setJuego: (state , action: PayloadAction<DataJuego>) =>{
        state.partida = action.payload;
      },
    },
})

export const { setJuego } = JuegoSlice.actions

export default JuegoSlice.reducer