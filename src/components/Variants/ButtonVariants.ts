import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

export const ButtonVariantStyle = (theme: DefaultTheme, variant = "primary") =>
  ({
    primary: css`
      background: ${theme["yellow"]};
      border: 1px solid "#000";

      padding: 0.75rem 0.5rem;
      text-align: center;

      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      font-weight: bold;
      line-height: 1.6;
      color: ${theme["white"]};
      text-transform: uppercase;

      transition: all .05s ease-in-out;

      &:hover {
        background: ${theme["yellow-dark"]};
      }
    `,

    secondary: css`
      background: ${theme["base-button"]};

      padding: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;

      font-family: "Roboto", sans-serif;
      font-size: 0.75rem;
      line-height: 1.6;
      text-transform: uppercase;
      color: ${theme["base-text"]};

      & svg {
        fill: ${theme["purple"]};
      }

      &:not(:disabled):hover {
        background: ${theme["base-hover"]};
        color: ${theme["base-subtitle"]};
      }
    `,

    icon: css`
      border: 0;
      border-radius: 6px;
      background-color: ${theme['purple-dark']};

      margin-left: 0.6rem;

      padding: 0.5rem;
      color: ${theme['base-card']};

      cursor: pointer;

      transition: all 0.3s ease;

      &:not(:disabled):hover {
        background-color: ${theme['purple']};
      }

      &:not(:disabled):active {
        transform: scale(0.9);
      }
    `,

    location: css`
    position: relative;
    display: flex;
    align-items: center;
    gap: .2rem;
    padding: .5rem;

    border-radius: 6px;
    background-color: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    font-size: .875rem;
    line-height: 1.3;

    transition: all .4s ease;

    & svg {
        fill: ${props => props.theme['purple']};
        transition: all .3s ease-in-out;
    }

    &:hover {
      background-color: ${props => props.theme['purple-dark']};
      color: ${props => props.theme['purple-light']};
      
      & svg {
        fill: ${props => props.theme['purple-light']};
      }
    }
    `,

    checkbox: css`
      display: flex;
      gap: .75rem;
      background: ${theme['base-button']};
      border-radius: 6px;
      padding: 1rem;
      width: 11.125rem;

      font-family: 'Roboto', sans-serif;
      font-size: .75rem;
      line-height: 1.6;
      text-transform: uppercase;
      color: ${theme['base-text']};

      & svg {
        fill: ${theme['purple']};
      }

      &:hover {
        background: ${theme['base-hover']};
        color: ${theme['base-subtitle']};
      }

      &:focus {
        background: ${theme['purple-light']};
      }
    `
  })[variant];

export const ButtonContainer = styled.button<{ variant: string }>`
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }

  ${({ theme, variant }) => ButtonVariantStyle(theme, variant)}
`;
