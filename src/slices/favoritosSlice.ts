import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

interface FavoritosState {
  produtos: Produto[]
}

const initialState: FavoritosState = {
  produtos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      if (!state.produtos.find((p) => p.id === produto.id)) {
        state.produtos.push(produto)
      }
    },
    removerFavorito(state, action: PayloadAction<number>) {
      state.produtos = state.produtos.filter((p) => p.id !== action.payload)
    }
  }
})

export const { adicionarFavorito, removerFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
