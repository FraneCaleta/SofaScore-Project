import styled from "styled-components";

export const MainFlexContainer = styled.div`
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-flow: nowrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const StyledFlexItem = styled.div`
  flex: 1;
  min-height: 22px;
  line-height: 1.2;
  min-width: 100px;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const StyledMiddleFlexItem = styled.div`
  flex: 1;
  min-height: 22px;
  line-height: 1.2;
  min-width: 200px;
  margin: 0;
  border-left: solid gray 1px;
  flex-grow: 5;
  padding-left: 5px;
`;
