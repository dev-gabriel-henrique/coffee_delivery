import styled from "styled-components";

export const QuantityContainer = styled.div`
  background-color: ${props => props.theme['base-button']};
  padding: .5rem;
  display: flex;
  align-items: center;
  gap: .25rem;

  max-width: max-content;
  
  border-radius: 6px;

  & input[type='number'] {
    border: 0;
    width: 1.25rem;
    max-height: 2.625rem;

    text-align: center;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.3;

    background-color: transparent;
    color: ${props => props.theme['base-title']};
  }

  & input[type='number']::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  
    & button[type='button'] {
      border: none;
      background-color: transparent;
  
      cursor: pointer;
  
      & svg {
        fill: ${props => props.theme['purple']};
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
`