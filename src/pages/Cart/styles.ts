import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  gap: .75rem;
  justify-content: center;
  margin-bottom: 1rem;

  & a {
      background: ${props => props.theme["yellow"]};
      border: 1px solid "#000";
      border-radius: 6px;

      padding: 0.75rem 0.5rem;
      text-align: center;

      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      font-weight: bold;
      line-height: 1.6;
      color: ${props => props.theme['white']};
      text-transform: uppercase;

      transition: all .05s ease-in-out;

      &:hover {
        background: ${props => props.theme["yellow-dark"]};
      }
  }
`