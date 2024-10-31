import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;
  
  & h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  & p {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;

    margin-top: 2.5rem;
  }
`;

export const DeliveryInfo = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;
  padding: 2.5rem;
  width: 32.875rem;

  border: 1px solid black;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`;

export const Informations = styled.div`
  display: flex;
  gap: .75rem;
  align-items: center;

  & span {
    display: flex;
    justify-content: center;
    padding: .5rem .5rem;
    border-radius: 50%;
  }

  & #map {
    background-color: ${props => props.theme["purple"]};
  }

  & #timer {
    background-color: ${props => props.theme["yellow"]}
  }

  & #dollar {
    background-color: ${props => props.theme["yellow-dark"]}
  }
  
  
` 