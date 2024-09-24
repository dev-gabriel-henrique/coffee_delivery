import { NumberInput, TextInput } from "./AddressForm"

export function AddressInputs() {
  return(
    <>
  <NumberInput 
  maxLength={9}
  placeholder="CEP"
  />

  <TextInput 
  placeholder="Rua"/>

  <div>
  <NumberInput 
  placeholder="Número"
  maxLength={5}
  />

  <TextInput 
  placeholder="Complemento"
  />
  </div>
  
  <div>
  <TextInput 
  placeholder="Bairro"
  />

  <TextInput 
  placeholder="Cidade"
  />

  <TextInput 
  placeholder="UF"
  maxLength={2}/>
  </div>

  </>
  )
}