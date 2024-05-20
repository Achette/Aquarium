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
        const {Peixe, Tartaruga, Sapo, Cobra} = action.payload.pets[0]
        state.pets[0].Peixe.quantity = Peixe.quantity
        state.pets[0].Tartaruga.quantity = Tartaruga.quantity
        state.pets[0].Sapo.quantity = Sapo.quantity
        state.pets[0].Cobra.quantity = Cobra.quantity
        console.log('ACTION:::', action.payload)
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
