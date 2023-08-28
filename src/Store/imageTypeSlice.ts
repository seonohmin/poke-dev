import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { POKEMON_IMAGE_TYPE } from '../Constants'

export type PokemonImageKeyType = typeof POKEMON_IMAGE_TYPE[keyof typeof POKEMON_IMAGE_TYPE]

export interface ImageTypeState {
  type: PokemonImageKeyType // TODO : imageType
}

const initialState: ImageTypeState = {
  type: POKEMON_IMAGE_TYPE.FRONT_DEFAULT,
}

export const imageTypesSlice = createSlice({
  name: 'imageType',
  initialState,
  reducers: {
    changeImageType: (state, action: PayloadAction<ImageTypeState>) => {
      state.type = action.payload.type
    },
  },
})

export const { changeImageType } = imageTypesSlice.actions

export const imageTypeReducer = imageTypesSlice.reducer