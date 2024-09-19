import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink id='logo' to="/" end title='Página Inicial'>
      <img src={logo} alt="Página Inicial" />
      </NavLink>

      <nav>
        <NavLink id='location' to="/cart" end title='localização'>
          <MapPin weight='fill' size={22} />
          Porto Alegre, RS
        </NavLink>

        <NavLink id='cart' to="/cart" end title='Carrinho de compras'>
          <ShoppingCart weight='fill' size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}