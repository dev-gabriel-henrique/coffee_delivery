import styled from "styled-components";

export const PricesContainer = styled.div`
& form {
    display: flex;
    align-items: center;
    
    & span {
    background-color: transparent;
    min-width: 5.875rem;
    
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${props => props.theme['base-text']};
    margin: auto;

      & small {
      font-size: .875rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      line-height: 1.3;
    }
  } }
`