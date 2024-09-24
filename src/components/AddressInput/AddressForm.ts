import styled from "styled-components";

export const BaseAddress = styled.input`
  background-color: ${props => props.theme['base-input']};
  border-radius: 4px;
  padding: .75rem;

  border: 0;
  height: 2.625rem;

  font-family: 'Roboto', sans-serif;
  font-size: .875rem;
  line-height: 1.3;
  color: ${props => props.theme['base-text']};
  
  &::placeholder {
    color: ${props => props.theme['base-label']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme['yellow-dark']};
  }
`

export const NumberInput = styled(BaseAddress)`
  max-width: 12.5rem;
`

export const TextInput = styled(BaseAddress)`
  width: 100%;
`