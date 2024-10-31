import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { DeliveryAddress } from "../../components/Address/index";
import { ButtonContainer } from "../Variants/ButtonVariants";
import { useContext, useRef, useState } from "react";
import { CombinedContext } from "../../contexts/CombinedContext";

export function Header() {
  const { activeAddress, cart } = useContext(CombinedContext);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);

  const coffeeQuantity = cart.reduce((total, item) => total + item.quantidade, 0)

  return (
    <HeaderContainer>
      <NavLink id="logo" to="/" end title="Página Inicial">
        <img src={logo} alt="Página Inicial" />
      </NavLink>

      <nav>
        <ButtonContainer
          variant="location"
          id="location"
          title="localização"
          onClick={handleOpen}
          ref={buttonRef}
        >
          {activeAddress ? (
            <p style={{textTransform: "uppercase"}}>{
              `
              ${activeAddress.cidade} - 
              ${activeAddress.uf}
              `
              }
              </p>
          ) : (
            <p>Selecione um endereço</p>
          )}
          <MapPin weight="fill" size={22} />
        </ButtonContainer>

        <DeliveryAddress
          open={dialogOpen}
          onClose={handleClose}
          buttonRef={buttonRef}
        />

        <NavLink 
        id="cart" 
        to="/cart" 
        end title="Carrinho de compras">
          <ShoppingCart weight="fill" size={22} />
          {coffeeQuantity ? (
          <span>{coffeeQuantity}</span>
        ) : ("")
        }
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
