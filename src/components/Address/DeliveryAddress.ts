import styled from "styled-components";

export const AddressContainer = styled.dialog`
  position: absolute;

  display: grid;
  gap: 2rem;
  justify-content: center;
  
  background-color: ${props => props.theme['base-card']};
  max-width: 20rem;
  padding: 2.5rem;
  transform: translateX(-5rem);
  
  border: none;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

    &[open] {
      display: grid;
    }

    &:not([open]) {
      visibility: hidden;
    }

  &::backdrop {
    background-color: black;
    opacity: .5;
  }
`

export const AddressSummary = styled.div`
  display: flex;
  align-items: start;
  gap: .5rem;

  & svg {
    fill: ${props => props.theme['yellow-dark']};
  }
  
  & > div {
    display: grid;
    gap: 2px;

    & h2 {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3;
      color: ${props => props.theme['base-subtitle']};
    }

    & p {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: .875rem;
      line-height: 1.3;
      color: ${props => props.theme['base-text']};
    }
  }

  & button {
    border: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;

    & svg {
      fill: ${props => props.theme['yellow']};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${props => props.theme['yellow']};
    }

    &:hover {
      & svg {
        fill: ${props => props.theme['yellow-dark']};
      }
    }
  }
`

export const AddressForm = styled.form`
  display: grid;
  gap: 1rem;
`