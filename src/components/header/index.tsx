import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { DeliveryAddress } from '../../components/Address/index'
import { ButtonContainer } from '../Variants/ButtonVariants'
import { useRef, useState } from 'react'

export function Header() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleOpen = () => setDialogOpen(true)
  const handleClose = () => setDialogOpen(false)

  return (
    <HeaderContainer>
      <NavLink id='logo' to="/" end title='Página Inicial'>
      <img src={logo} alt="Página Inicial" />
      </NavLink>

      <nav>
        <ButtonContainer 
        variant='location' 
        id='location' 
        title='localização'
        onClick={handleOpen}
        ref={buttonRef}
        >
          <MapPin weight='fill' size={22} />
          Porto Alegre, RS
        </ButtonContainer>

        <DeliveryAddress
        open={dialogOpen}
        onClose={handleClose}
        buttonRef={buttonRef}
        />

        <NavLink id='cart' to="/cart" end title='Carrinho de compras'>
          <ShoppingCart weight='fill' size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}