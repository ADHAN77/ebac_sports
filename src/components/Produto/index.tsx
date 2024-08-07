import { Produto as ProdutoType } from '../../types'
import * as S from './styles'
import { paraReal } from '../../utils/paraReal'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { adicionarAoCarrinho } from '../../slices/carrinhoSlice'

type Props = {
  produto: ProdutoType
  favoritar: (produto: ProdutoType) => void
  aoComprar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

const Produto = ({
  produto,
  favoritar,
  aoComprar,
  estaNosFavoritos
}: Props) => {
  const dispatch = useDispatch()
  const carrinho = useSelector((state: RootState) => state.carrinho.produtos)

  const handleAdicionarAoCarrinho = (produto: ProdutoType) => {
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Este produto já está no carrinho.')
    } else {
      dispatch(adicionarAoCarrinho(produto))
      aoComprar(produto) // Chama a função aoComprar após adicionar ao carrinho
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <p>{produto.descricao}</p>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => handleAdicionarAoCarrinho(produto)}>
        Comprar
      </S.BtnComprar>
      <S.BtnFavoritar onClick={() => favoritar(produto)}>
        {estaNosFavoritos ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </S.BtnFavoritar>
    </S.Produto>
  )
}

export default Produto
