import { RootState } from '../store'
import { AquariumServices } from '@/services/aquarium-services'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface Details {
  name: string
  format: string
  material: string
  powerSupply: string
  error: unknown
}

const initialState: Details = {
  name: '',
  format: '',
  material: '',
  powerSupply: '',
  error: null,
}

const aquariumDetailSlice = createSlice({
  name: 'Aquarium-Details',
  initialState,
  reducers: {
    resetAquarium: (state) => {
      state.name = ''
      state.format = ''
      state.material = ''
      state.powerSupply = ''
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAquariumDetails.fulfilled,
      (state, action: PayloadAction<Details>) => {
        const { name, format, material, powerSupply } = action.payload
        state.format = format
        state.material = material
        state.name = name
        state.powerSupply = powerSupply
      }
    )
  },
})

export const fetchAquariumDetails = createAsyncThunk(
  'fetch/aquarium-details',
  async (id: string) => {
    const response = await AquariumServices.getById(id)
    return response
  }
)

export default aquariumDetailSlice.reducer
export const { resetAquarium } = aquariumDetailSlice.actions

export const getAquariumDetails = (state: RootState) => state.aquariumDetails
