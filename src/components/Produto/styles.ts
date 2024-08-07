import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyle'

export const Produto = styled.div`
  background-color: white;
  border: 1px solid ${cores.corFundo};
  padding: 16px;
  border-radius: 8px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const Titulo = styled.h3`
  min-height: 64px;
  color: ${cores.corTexto};
`

export const Capa = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
  }
`

export const Prices = styled.div`
  margin: 16px 0;
  color: ${cores.corTexto};

  strong {
    font-size: 18px;
  }
`

export const BtnComprar = styled.button`
  display: block;
  width: 100%;
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 8px;

  &:hover {
    background-image: linear-gradient(
      -45deg,
      ${cores.corPrincipal},
      ${cores.corSecundaria}
    );
  }
`

export const BtnFavoritar = styled.button`
  display: block;
  width: 100%;
  background-color: ${cores.corSecundaria};
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${cores.corPrincipal};
  }
`
