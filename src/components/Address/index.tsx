import * as z from "zod";
import { MapPin, X } from "@phosphor-icons/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import React, { useContext, useEffect, useRef } from "react";

import {
  AddressContainer,
  AddressForm,
  AddressSummary,
} from "./DeliveryAddress";
import { ButtonContainer } from "../Variants/ButtonVariants";
import { CombinedContext } from "../../contexts/CombinedContext";
import { AddressInputs } from "../AddressInput";

interface DeliveryAddressProps {
  open: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export interface ILocationProps {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

const addressSchema = z.object({
  cep: z
    .string()
    .min(9, "CEP deve ter 9 caracteres")
    .regex(/^\d{5}-\d{3}$/, "Formato do CEP inválido"),
  rua: z.string().min(1, "Rua é obrigatória"),
  numero: z.string().min(1, "Número é obrigatório"),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  uf: z
    .string()
    .length(2, "UF deve ter exatamente 2 caracteres")
    .regex(/^[A-Z]{2}$/, "UF deve conter apenas letras maiúsculas"),
});

type TNewAddressFormData = z.infer<typeof addressSchema>;

export function DeliveryAddress({
  open,
  onClose,
  buttonRef,
}: DeliveryAddressProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { createNewAddress } = useContext(CombinedContext);

  const newAddressForm = useForm<TNewAddressFormData>({
    resolver: zodResolver(addressSchema)
  });

  const handleErrors = (errors: FieldErrors<TNewAddressFormData>) => {
    const errorMessages = Object.values(errors)
      .map((error) => error.message)
      .join("\n");
  
    alert("Erros no formulário:\n" + errorMessages);
  };

  const { handleSubmit } = newAddressForm;

  const handleClose = () => onClose();

  function handleCreateNewAddress(data: TNewAddressFormData) {
    createNewAddress(data);
    handleClose();
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    const button = buttonRef.current;

    if (dialog && button) {
      const buttonPosition = button.getBoundingClientRect();
      dialog.style.top = `${buttonPosition.bottom + window.scrollY}px`;
      dialog.style.left = `${buttonPosition.left}px`;
    }

    if (open) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }

    dialog?.addEventListener("click", function (e) {
      if (e.target == this) dialog.close();
    });
  }, [open, buttonRef]);

  return (
    <AddressContainer ref={dialogRef} onClose={onClose}>
      <AddressSummary>
        <MapPin size={22} />
        <div>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>

        <button onClick={handleClose}>
          <X size={22} />
        </button>
      </AddressSummary>

      <AddressForm onSubmit={handleSubmit(handleCreateNewAddress, handleErrors)}>
        <FormProvider {...newAddressForm}>
          <AddressInputs />
        </FormProvider>
        <ButtonContainer type="submit" variant="primary">
          Salvar
        </ButtonContainer>
      </AddressForm>
    </AddressContainer>
  );
}
