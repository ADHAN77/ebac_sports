import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from './store'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { adicionarAoCarrinho } from './slices/carrinhoSlice'
import { adicionarFavorito, removerFavorito } from './slices/favoritosSlice'
import { useObterProdutosQuery } from './services/produtoApi'
import { Produto } from './types'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { data: produtos = [] } = useObterProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.carrinho.produtos)
  const favoritos = useSelector((state: RootState) => state.favoritos.produtos)

  const handleAdicionarAoCarrinho = (produto: Produto) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleFavoritar = (produto: Produto) => {
    if (favoritos.find((p) => p.id === produto.id)) {
      dispatch(removerFavorito(produto.id))
    } else {
      dispatch(adicionarFavorito(produto))
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={handleFavoritar}
          adicionarAoCarrinho={handleAdicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
