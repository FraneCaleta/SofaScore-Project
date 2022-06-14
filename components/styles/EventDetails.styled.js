import styled from "styled-components";

export const MainEventContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 100px 0 50px 0;
  font-size: 24px;

  .dark & {
    border-color: #bb86fc;
    color: #bb86fc;
  }

  @media (max-width: 860px) {
    font-size: 16px;
    & img {
      width: 42px;
      height: 42px;
      margin: 0 4px;
    }
  }
`;

export const EventTeamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
`;

export const EventScoreContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100px;
`;

export const CenterVenue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;

  .dark & {
    border-color: #bb86fc;
    color: #bb86fc;
  }
`;

export const FirstHalf = styled.span`
  font-size: 16px;
  margin-top: 5px;
  opacity: 0.5;
`;
