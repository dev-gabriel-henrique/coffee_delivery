import styled from "styled-components"

export const CardCoffee = styled.div`
  padding: 0 1.25rem 1.25rem;
  max-width: fit-content;

  background-color: ${props => props.theme['base-card']};
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;

  & h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    line-height: 1.3;
  }

  & img {
    transform: translatey(-24px);
    margin-inline: auto;
  }

  & span {
    width: fit-content;
    border-radius: 16px;
    padding: .5rem;
    background-color: ${props => props.theme['yellow-light']};

    margin: 0 auto 1rem;

    color: ${props => props.theme['yellow-dark']};
    font-size: .625rem;
    font-weight: bold;
    line-height: 1.3;
    text-transform: uppercase;
  }

  & h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: .5rem;
  }

  & p {
    font-size: .875rem;
    line-height: 1.3;

    color: ${props => props.theme['base-label']};
    max-width: 13.5rem;

    margin: 0 auto 2rem;
  }
`

export const SpanContext = styled.div`
  display: inline-flex;
  gap: .25rem;

  width: fit-content;
  margin: auto;
`