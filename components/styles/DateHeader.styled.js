import styled from "styled-components";

export const DateHeaderContainer = styled.div`
  position: relative;
  background: transparent;
  min-height: 36px;
  margin: 16px 0 0;
`;

export const MainDateHeaderContainer = styled.div`
  width: 250px;
  display: block;
  margin: 0px auto;
  max-width: 100%;
  overflow: initial;
`;

export const FlexDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  & a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: grey;
  }

  .dark & a {
    color: whitesmoke;
  }
`;
