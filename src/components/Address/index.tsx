import { MapPin, X } from "@phosphor-icons/react";
import { AddressContainer, AddressForm, AddressSummary } from "./DeliveryAddress";
import { AddressInputs } from "../AddressInput";
import React, { useEffect, useRef, useState } from "react";
import { ButtonContainer } from "../Variants/ButtonVariants";

interface DeliveryAddressProps {
  open: boolean,
  onClose: () => void,
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export function DeliveryAddress({ open, onClose, buttonRef }: DeliveryAddressProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current;
    const button = buttonRef.current

    if(dialog && button) {
      const buttonPosition = button.getBoundingClientRect()
      dialog.style.top = `${buttonPosition.bottom + window.scrollY}px`
      dialog.style.left = `${buttonPosition.left}px`
    }
    
    if(open) {
      dialog?.showModal()
    } else {
      dialog?.close()
    }
    
    dialog?.addEventListener("click", function(e) {
        if(e.target == this) dialog.close()
        })
      
    }, [open, buttonRef])
    
    const handleClose = () => onClose()
    
    return (
    <AddressContainer
    ref={dialogRef}
    onClose={onClose}
    >
      <AddressSummary>
        <MapPin size={22} />
        <div>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>

        <button
        onClick={handleClose}>
          <X size={22}/>
          </button>
      </AddressSummary>

      <AddressForm>
        <AddressInputs />

        <ButtonContainer 
        variant="primary">
          Salvar
        </ButtonContainer>
      </AddressForm>
    </AddressContainer>
  );
}
