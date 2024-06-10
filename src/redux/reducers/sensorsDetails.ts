import { RootState } from '../store'
import { getAllSensor } from '@/services/sensors-services'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface Sensors {
  created_at: string
  current: string
  id: string
  name: string
  updated_at: string
  saturacao: string
}

const initialState: Sensors[] = [
  {
    created_at: '',
    current: '',
    id: '',
    name: '',
    updated_at: '',
    saturacao: ''
  },
]

const sensorSlice = createSlice({
  name: 'Aquarium-sensors',
  initialState,
  reducers: {
    resetSensors: () => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllSensors.fulfilled,
      (_, action: PayloadAction<Sensors[]>) => {
        return action.payload
      }
    )
  },
})

export const fetchAllSensors = createAsyncThunk(
  'fetch/sensors-details',
  async (id: string) => {
    const response = await getAllSensor(id)
    return response.data
  }
)

export default sensorSlice.reducer
export const { resetSensors } = sensorSlice.actions

export const getSensorsByAquariumId = (state: RootState) => state.sensorsDetails
