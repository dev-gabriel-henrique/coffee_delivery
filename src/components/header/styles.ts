import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 2rem 10rem;

#logo {
  transition: transform .3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
}

nav {
  display: flex;
  align-items: center;
  gap: .75rem;

  & #location {
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
  }

  & #cart {
    padding: .5rem;
    background-color: ${props => props.theme['yellow-light']};
    border-radius: 6px;

    transition: all .3s ease;

    & svg {
      fill: ${props => props.theme['yellow-dark']};
      transition: all .3s ease;
    }

    &:hover {
      background-color: ${props => props.theme['yellow']};

      & svg {
        fill: ${props => props.theme['yellow-light']};
      }
    }
  }
}
`