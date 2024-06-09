import { RootState } from '../store'
import { AquariumProps } from '@/models'
import { getAllAquariums } from '@/services/aquarium-services'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: AquariumProps[] = []

const aquariumSlice = createSlice({
  name: 'aquarium',
  initialState,
  reducers: {
    resetAllAquarium: () => {
      return []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllAquariumUser.fulfilled,
      (_, action: PayloadAction<AquariumProps[]>) => {
        return action.payload
      }
    )
  },
})

export const fetchAllAquariumUser = createAsyncThunk(
  'fetch/aquariums',
  async () => {
    const response = await getAllAquariums()
    return response.data
  }
)

export default aquariumSlice.reducer
export const { resetAllAquarium } = aquariumSlice.actions

export const getAllUserAquariums = (state: RootState) => state.aquariumSlice
