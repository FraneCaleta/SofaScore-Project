import styled from "styled-components";

export const StyledCard = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: center;
  color: inherit;
  text-decoration: none;
  border: 2px solid gray;
  border-radius: 10px;
  transition: color 0.2s ease, border-color 0.2s ease;
  width: 300px;
  height: 100px;
  max-width: 300px;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
`;
