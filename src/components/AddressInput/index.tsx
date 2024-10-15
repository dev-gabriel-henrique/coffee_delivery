import { useFormContext } from "react-hook-form";

import { InputContainer, NumberInput, TextInput } from "./AddressForm";

export function AddressInputs() {
  const { register, setValue } = useFormContext();

  const applyCEPMask = (value: string): string => {
    value = value.replace(/\D/g, "");

    if (value.length > 5) {
      value = value.substring(0, 5) + "-" + value.substring(5, 8);
    }

    return value;
  };

  const handleCEPMaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyCEPMask(e.target.value);
    setValue("cep", maskedValue);
  };

  return (
    <InputContainer>
      <NumberInput 
      id="cep" 
      placeholder="CEP" 
      {...register("cep", {
        onChange: handleCEPMaskChange,
      })} 
      />

      <TextInput 
      id="rua" 
      placeholder="Rua" 
      {...register("rua")} 
      />

      <div>
        <NumberInput
          id="numero"
          placeholder="Número"
          maxLength={5}
          {...register("numero")}
        />

        <TextInput
          id="complemento"
          placeholder="Complemento"
          {...register("complemento")}
        />
      </div>

      <div>
        <TextInput 
        id="bairro" 
        placeholder="Bairro" 
        {...register("bairro")} 
        />

        <TextInput 
        id="cidade" 
        placeholder="Cidade" 
        {...register("cidade")} 
        />

        <TextInput 
        id="uf" 
        placeholder="UF" 
        maxLength={2} 
        {...register("uf")} 
        />
      </div>
    </InputContainer>
  );
}
