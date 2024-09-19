import styled from "styled-components";

export const BriefingContainer = styled.div`
  display: grid;
  align-items: center;
  gap: 4.125rem;
`

export const BriefingTextContainer = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;

  
  & h1 {
    font-size: 3rem;
    font-weight: 900;
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
    
    color: ${props => props.theme['base-title']};
    
    max-width: 36.75rem;
  }

  & p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};

    max-width: 34rem;
  }
`

export const AdvantagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 1.25rem;
  column-gap: 2.5rem;

  max-width: 35.5rem;

  & p {
    display: flex;
    align-items: center;
    gap: .75rem;
    
    color: ${props => props.theme['base-text']};
    line-height: 1.3;

    & span {
      padding: .5rem;
      border-radius: 50%;
      display: flex;

      & svg {
        fill: ${props => props.theme['white']};
      }
    }

    & #shoppingCartIcon {
      background-color: ${props => props.theme['yellow-dark']};
    }

    & #packageIcon {
      background-color: ${props => props.theme['base-text']};
      margin-left: 5px;
    }
    & #timerIcon {
      background-color: ${props => props.theme['yellow']};
    }
    & #coffeeIcon {
      background-color: ${props => props.theme['purple']};
    }
  }
`