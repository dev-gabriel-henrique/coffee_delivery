import styled from "styled-components";

export const SelectedsContainer = styled.div`
  max-width: 40rem;
  border-top-right-radius: 2.5rem;
  border-radius: 6px;
  border-bottom-left-radius: 2.5rem;
  display: grid;
  gap: 2rem;
  padding: 2.5rem;

  background-color: ${props => props.theme['base-card']};
`

export const CoffeeSelected = styled.div`
  display: flex;
  justify-content: space-between ;
  align-items: center;
  gap: 1.25rem;

  padding-block: 1.5rem;
  border-bottom: 1px solid ${props => props.theme['base-button']};

  & > div {
    display: grid;
    gap: 1rem;
    align-items: center;
    text-align: center;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};

    & > div {
      display: flex;
      align-items: center;
      gap: .5rem;
    }

  }

  & h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 1.3;
    font-weight: bold;
    color: ${props => props.theme['base-text']};
  }

  & p {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    font-weight: bold;
    color: ${props => props.theme['base-text']};
  }
`

export const SelectedsMain = styled.div`
  margin-top: 1.25rem;
  display: grid;
  align-items: center;
  gap: .75rem;
`

export const ValueBase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme['base-text']};

  & p {
    font-size: 1rem;
    line-height: 1.3;
  }

  & p + p {
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const ValueOfTotalItems = styled(ValueBase)``
export const DeliveryTax = styled(ValueBase)``
export const TotalValue = styled(ValueBase)`
  & p {
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: bold;
    color: ${props => props.theme['base-subtitle']};
  }

  & strong {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const H1Selected = styled.h1`
    padding: .75rem;
    font: 800 1rem/1.3 'Baloo 2', sans-serif;
`