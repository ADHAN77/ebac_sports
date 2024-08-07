import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

interface CarrinhoState {
  produtos: Produto[]
}

const initialState: CarrinhoState = {
  produtos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      if (!state.produtos.find((p) => p.id === produto.id)) {
        state.produtos.push(produto)
      }
    },
    removerDoCarrinho(state, action: PayloadAction<number>) {
      state.produtos = state.produtos.filter((p) => p.id !== action.payload)
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
