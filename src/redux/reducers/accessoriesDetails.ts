import { RootState } from '../store'
import { getAllAccessories } from '@/services/accessories-services'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface Accessories {
  created_at: string
  id: string
  name: string
  updated_at: string
}

const initialState: Accessories[] = [
  {
    id: '',
    created_at: '',
    name: '',
    updated_at: '',
  },
]

const accessorySlice = createSlice({
  name: 'Aquarium-accessories',
  initialState,
  reducers: {
    resetAccessories: () => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAccessoriesAquarium.fulfilled,
      (_, action: PayloadAction<Accessories[]>) => {
        return action.payload
      }
    )
  },
})

export const fetchAccessoriesAquarium = createAsyncThunk(
  'fetch/ accessories-details',
  async (id: string) => {
    const response = await getAllAccessories(id)
    return response
  }
)

export default accessorySlice.reducer
export const { resetAccessories } = accessorySlice.actions

export const getAccessoriesByAquariumId = (state: RootState) =>
  state.accessoriesDetails
