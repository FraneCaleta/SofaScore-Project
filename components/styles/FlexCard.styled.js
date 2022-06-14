import styled from "styled-components";

export const MainContainer = styled.div`
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  cursor: pointer;
`;

export const EventRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 90px;
`;

export const Event = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const Team = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;

  & > img {
    margin-right: 16px;
  }
`;

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Separator = styled.div`
  height: 100%;
  min-height: 35px;
  border-left: 1px solid rgba(0, 12, 24, 0.14);
  margin: 0px 24px;
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
