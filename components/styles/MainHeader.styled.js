import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 1000px;
  display: block;
  margin: 0px auto;
  max-width: 95%;
  overflow: initial;
`;

export const StyledHeader = styled.header`
  background-color: #3700b3;
  color: white;
`;

export const MainHeaderContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 56px;
  font-weight: 500;

  & > img {
    margin-left: 16px;
    cursor: pointer;
  }

  & a {
    text-decoration: none;
    color: white;
  }
`;

export const FavoritesContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 16px;
  }

  @media (max-width: 350px) {
    & > * {
      margin-right: 8px;
    }
  }
`;

export const LiveGamesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 170px;
  min-width: 100px;

  & > * {
    margin-right: 16px;
  }

  @media (max-width: 550px) {
    & > * {
      margin-right: 40px;
    }
  }
`;
