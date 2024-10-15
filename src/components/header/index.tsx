import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { DeliveryAddress } from "../../components/Address/index";
import { ButtonContainer } from "../Variants/ButtonVariants";
import { useContext, useRef, useState } from "react";
import { AddressContext } from "../../contexts/address/addressContext";

export function Header() {
  const { activeAddress } = useContext(AddressContext);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);

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
            <p style={{textTransform: "capitalize"}}>{
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

        <NavLink id="cart" to="/cart" end title="Carrinho de compras">
          <ShoppingCart weight="fill" size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
