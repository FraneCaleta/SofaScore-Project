import Link from "next/link";
import React from "react";
import { BASE_API } from "../../utils/constants";
import * as S from "../styles/FlexCard.styled";

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
    <Link href={`/${eventId}`}>
      <S.MainContainer>
        <h3>{tournamentName}</h3>
        <S.EventRow>
          <S.EventContainer>
            <S.Time>
              <span>{time}</span>
              <span>{status}</span>
            </S.Time>
            <S.Separator />
            <S.Event>
              <S.Team>
                {homeTeamImage}
                <div>{homeTeam}</div>
              </S.Team>
              <S.Team>
                {awayTeamImage}
                <div>{awayTeam}</div>
              </S.Team>
            </S.Event>
          </S.EventContainer>
          <S.Score>
            <span>{homeScore}</span>
            <span>{awayScore}</span>
          </S.Score>
        </S.EventRow>
      </S.MainContainer>
    </Link>
  );
};

export default FlexCard;
