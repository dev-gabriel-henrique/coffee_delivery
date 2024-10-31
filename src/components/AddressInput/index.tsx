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

  const applyRawNumber = (value: string): string => {
    return (value = value.replace(/\D+/g, ""));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = applyRawNumber(e.target.value);
    setValue("numero", rawValue);
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
      maxLength={40}
      {...register("rua")} 
      />

      <div>
        <NumberInput
          id="numero"
          placeholder="Número"
          maxLength={5}
          {...register("numero", {
            onChange: handleNumberChange
          })}
        />

        <TextInput
          id="complemento"
          placeholder="Complemento"
          maxLength={40}
          {...register("complemento")}
        />
      </div>

      <div>
        <TextInput 
        id="bairro" 
        placeholder="Bairro" 
        maxLength={40}
        {...register("bairro")} 
        />

        <TextInput 
        id="cidade" 
        placeholder="Cidade" 
        maxLength={40}
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
