import styled from "styled-components";

export const DeliveryPaymentContainer = styled.div`
  max-width: 40rem;
  display: grid;
  gap: 2rem;
  padding: 2.5rem;

  border-radius: 6px;
  border-top-left-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;

  background-color: ${props => props.theme['base-card']};
  margin-bottom: 1rem;
`

export const PaymentSummary = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  justify-content: start;
  gap: .5rem;

  & h2 {
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme['base-subtitle']};
  }

  & p {
    font-size: .875rem;
    line-height: 1.3;
    color: ${props => props.theme['base-text']};
  }

  & svg {
    fill: ${props => props.theme['purple']};
  }
`

export const PaymentMethod = styled.form`
  display: flex;
  gap: .75rem;
`