import styled from "styled-components";

export const HomeHeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  background: linear-gradient(0deg, rgba(250,250,250,1) 0%, rgba(235,229,249,1) 20%, rgba(241,233,201,1) 40%, rgba(241,233,201,1) 60%, rgba(235,229,249,1) 80%, rgba(250,250,250,1) 100%);

  padding-block: 6rem;
`

export const HomeContainer = styled.main`
  padding-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem 2.5rem;

  margin-bottom: 1rem;
`

export const H1Container = styled.h1`
  padding: 2rem 10rem;
  font: 800 2rem/1.3 'Baloo 2', sans-serif;
`