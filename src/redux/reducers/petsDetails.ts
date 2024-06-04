import { Animal } from '@/models'
import { RootState } from '../store'
import { getAllPets } from '@/services/pets-services'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: Animal[] = [
  {
    id: '',
    species: '',
    quantity: 0,
    created_at: '',
    updated_at: '',
  },
]

const petSlice = createSlice({
  name: 'Aquarium-pets',
  initialState,
  reducers: {
    resetPets: () => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchPetsByAquariumId.fulfilled,
      (_, action: PayloadAction<Animal[]>) => {
        return action.payload
      }
    )
  },
})

export const fetchPetsByAquariumId = createAsyncThunk(
  'fetch/pets-details',
  async (id: string) => {
    const response = await getAllPets(id)
    return response.data
  }
)

export default petSlice.reducer
export const { resetPets } = petSlice.actions

export const getPetsByAquariumId = (state: RootState) => state.petsDetails
