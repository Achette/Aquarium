import { RootState } from '../store'
import { AquariumServices } from '@/services/aquarium-services'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface Pet {
  quantity: number
}

interface Pets {
  Peixe: Pet
  Tartaruga: Pet
  Sapo: Pet
  Cobra: Pet
}

interface PetsDetails {
  pets: Pets[]
}

const initialState: PetsDetails = {
  pets: [
    {
      Peixe: {
        quantity: 0,
      },
      Tartaruga: {
        quantity: 0,
      },
      Sapo: {
        quantity: 0,
      },
      Cobra: {
        quantity: 0,
      },
    },
  ],
}

const petSlice = createSlice({
  name: 'Aquarium-pets',
  initialState,
  reducers: {
    resetPets: (state) => {
      state.pets = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchPetsByAquariumId.fulfilled,
      (state, action: PayloadAction<PetsDetails>) => {
        state.pets[0].Peixe.quantity = action.payload.pets[0].Peixe.quantity
        state.pets[0].Tartaruga.quantity =
          action.payload.pets[0].Tartaruga.quantity
        state.pets[0].Sapo.quantity = action.payload.pets[0].Sapo.quantity
        state.pets[0].Cobra.quantity = action.payload.pets[0].Cobra.quantity
      }
    )
  },
})

export const fetchPetsByAquariumId = createAsyncThunk(
  'fetch/pets-details',
  async (id: string) => {
    const response = await AquariumServices.getPetsByAquariumId(id)
    return response
  }
)

export default petSlice.reducer
export const { resetPets } = petSlice.actions

export const getPetsByAquariumId = (state: RootState) => state.petsDetails
