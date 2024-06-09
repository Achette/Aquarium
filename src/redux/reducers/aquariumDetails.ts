import { RootState } from '../store'
import { getAquariumById } from '@/services/aquarium-services'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface Details {
  name: string
  format_aquarium: string
  material: string
  voltage: string
  thickness: string
  height: string
  volume: string
  error: unknown
}

const initialState: Details = {
  name: '',
  format_aquarium: '',
  material: '',
  voltage: '',
  thickness: '',
  height: '',
  volume: '',
  error: null,
}

const aquariumDetailSlice = createSlice({
  name: 'Aquarium-Details',
  initialState,
  reducers: {
    resetAquarium: (state) => {
      state.name = ''
      state.format_aquarium = ''
      state.material = ''
      state.voltage = ''
      state.thickness = ''
      state.height = ''
      state.volume = ''
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAquariumDetails.fulfilled,
      (state, action: PayloadAction<Details>) => {
        const {
          name,
          format_aquarium,
          material,
          voltage,
          thickness,
          height,
          volume,
        } = action.payload
        state.format_aquarium = format_aquarium
        state.material = material
        state.name = name
        state.voltage = voltage
        state.thickness = thickness
        state.height = height
        state.volume = volume
      }
    )
  },
})

export const fetchAquariumDetails = createAsyncThunk(
  'fetch/aquarium-details',
  async (id: string) => {
    const response = await getAquariumById(id)
    return response.data.result
  }
)

export default aquariumDetailSlice.reducer
export const { resetAquarium } = aquariumDetailSlice.actions

export const getAquariumDetails = (state: RootState) => state.aquariumDetails
