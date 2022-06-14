import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 1rem;
  padding: 1rem;
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
    color: #3700b3;
    border-color: #3700b3;
  }

  .dark &:hover,
  .dark &:focus,
  .dark &:active {
    color: #03dac6;
    border-color: #03dac6;
  }

  .dark & {
    border-color: #bb86fc;
    color: #bb86fc;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
`;
