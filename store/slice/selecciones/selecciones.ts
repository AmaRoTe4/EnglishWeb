import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CuerpoPalabras } from '../../../interfaces'

//este no sirve para nada pero tiene que estar... actualizar a futuro un estado mas controlado
export const GeneralData = createSlice({
    name: 'generalData',
    initialState: {
      main:0,
    },
    reducers: {
      setMain: (state , action: PayloadAction<number>) =>{
        state.main = action.payload;
      },
    },
})

export const { setMain } = GeneralData.actions

export default GeneralData.reducer