import * as zod from "zod";
import { MapPin, X } from "@phosphor-icons/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
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

const newAddressValidationSchema = zod.object({
  rua: zod
    .string()
    .min(1, "Informe a sua rua!")
    .max(255, "Máximo de caractéres atingido! (255)"),
  bairro: zod
    .string()
    .min(1, "Informe seu CEP!")
    .max(255, "Máximo de caractéres atingido! (255)"),
  numero: zod
    .string()
    .min(1, "Informe o número de sua residência!")
    .max(255, "Máximo de caractéres atingido! (255)"),
  cep: zod
    .string()
    .min(9, "Informe seu CEP!")
    .max(9, "Número máximo atingido!"),
  complemento: zod.string().max(255, "Máximo de caractéres atingido! (255)"),
  cidade: zod
    .string()
    .min(1, "Informe sua cidade!")
    .max(255, "Máximo de caractéres atingido! (255)"),
  uf: zod
    .string()
    .min(1, "Informe seu estado")
    .max(255, "Máximo de caractéres atingido! (255)"),
});

type TNewAddressFormData = zod.infer<typeof newAddressValidationSchema>;

export function DeliveryAddress({
  open,
  onClose,
  buttonRef,
}: DeliveryAddressProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { createNewAddress } = useContext(CombinedContext);

  const newAddressForm = useForm<TNewAddressFormData>({
    resolver: zodResolver(newAddressValidationSchema),
    defaultValues: {
      bairro: "",
      cep: undefined,
      cidade: "",
      complemento: "",
      numero: undefined,
      rua: "",
      uf: "",
    },
  });

  const {
    formState: { errors },
  } = newAddressForm;
  useEffect(() => {
    if (Object.keys(errors).length) {
      console.log("Erros de validação:", errors);
    }
  }, [errors]);
  const { handleSubmit } = newAddressForm;

  const handleClose = () => onClose();

  function handleCreateNewAddress(data: TNewAddressFormData) {
    createNewAddress(data)
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

      <AddressForm onSubmit={handleSubmit(handleCreateNewAddress)}>
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
