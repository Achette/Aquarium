import { GraphsProps } from '@/models'
import { RootState } from '../store'
import { getAllOldSensor } from '@/services/sensors-services'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: GraphsProps[] = [
  {
    created_at: '',
    luminosidade: '',
    nivel_agua: '',
    nivel_oxigenio: '',
    saturacao: '',
    ph: '',
    temperatura: '',
  },
]

const graphSlice = createSlice({
  name: 'Aquaqium-sensors-values',
  initialState,
  reducers: {
    resetSensorValues: () => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchDataForGraphs.fulfilled,
      (_, action: PayloadAction<GraphsProps[]>) => {
        return action.payload
      }
    )
  },
})

export const fetchDataForGraphs = createAsyncThunk(
  'fetch-sensors-values',
  async (id: string) => {
    const response = await getAllOldSensor(id)
    return response.data
  }
)

export default graphSlice.reducer
export const { resetSensorValues } = graphSlice.actions

export const getAllSensorsValues = (state: RootState) => state.graphSlice
