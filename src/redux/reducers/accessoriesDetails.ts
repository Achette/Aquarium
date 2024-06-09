import { AccessoriesProps } from '@/models'
import { RootState } from '../store'
import { getAllAccessories } from '@/services/accessories-services'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: AccessoriesProps[] = [
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
      (_, action: PayloadAction<AccessoriesProps[]>) => {
        return action.payload
      }
    )
  },
})

export const fetchAccessoriesAquarium = createAsyncThunk(
  'fetch/ accessories-details',
  async (id: string) => {
    const response = await getAllAccessories(id)
    return response.data
  }
)

export default accessorySlice.reducer
export const { resetAccessories } = accessorySlice.actions

export const getAccessoriesByAquariumId = (state: RootState) =>
  state.accessoriesDetails
