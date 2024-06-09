import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface AquariumId {
  id: string
}

const initialState: AquariumId = {
  id: '',
}

const aquariumIdSlice = createSlice({
  name: 'aquarium-id-management',
  initialState,
  reducers: {
    storeAquariumId: (state, action) => {
      state.id = action.payload
      return state
    },

    clearAquariumId: (state) => {
      state.id = ''
      return state
    },
  },
})

export default aquariumIdSlice.reducer
export const { storeAquariumId, clearAquariumId } = aquariumIdSlice.actions

export const getAquariumId = (state: RootState) => state.aquariumIdSlice
