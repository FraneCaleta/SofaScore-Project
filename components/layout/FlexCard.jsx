import Link from "next/link";
import React from "react";
import { BASE_API } from "../../utils/constants";
import {
  MainFlexContainer,
  StyledFlexContainer,
  StyledFlexItem,
  StyledMiddleFlexItem,
} from "../styles/FlexCard.styled";

const FlexCard = ({
  tournamentName,
  time,
  status,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  homeTeamId,
  awayTeamId,
  eventId,
}) => {
  const homeTeamImage = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${BASE_API}/team/${homeTeamId}/image`}
      width={19}
      height={19}
      alt="Home team logo"
    />
  );
  const awayTeamImage = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${BASE_API}/team/${awayTeamId}/image`}
      width={19}
      height={19}
      alt="Away team logo"
    />
  );

  return (
    <>
      <Link href={`/${eventId}`}>
        <a>
          <MainFlexContainer>
            <h3>{tournamentName}</h3>
            <StyledFlexContainer>
              <StyledFlexItem>{time}</StyledFlexItem>
              <StyledMiddleFlexItem>
                {homeTeamImage} {homeTeam}
              </StyledMiddleFlexItem>
              <StyledFlexItem>{homeScore}</StyledFlexItem>
            </StyledFlexContainer>
            <StyledFlexContainer>
              <StyledFlexItem>{status}</StyledFlexItem>
              <StyledMiddleFlexItem>
                {awayTeamImage} {awayTeam}
              </StyledMiddleFlexItem>
              <StyledFlexItem>{awayScore}</StyledFlexItem>
            </StyledFlexContainer>
          </MainFlexContainer>
        </a>
      </Link>
    </>
  );
};

export default FlexCard;
