/* eslint-disable @next/next/no-img-element */
import * as S from "../styles/EventDetails.styled";
import Countdown from "react-countdown";
import { BASE_API } from "../../utils/constants";
import { timestampToDateTime } from "../../utils/date";

const EventDetails = ({ data }) => {
  const hasVenue = data.event.venue ? true : false;
  const hasScore =
    data.event?.homeScore.current || data.event?.awayScore.current
      ? true
      : false;
  const isLive = data.event?.status.type === "inprogress";
  const didStart = data.event?.status.type === "notstarted";
  const startTime = data.event?.startTimestamp
    ? data.event.startTimestamp * 1000
    : 12121212121212;

  const homeTeamId = data.event.homeTeam.id;
  const awayTeamId = data.event.awayTeam.id;

  const homeTeamImage = (
    <img
      src={`${BASE_API}/team/${homeTeamId}/image`}
      width={100}
      height={100}
      style={{ marginRight: "24px" }}
      alt="Home team logo"
    />
  );
  const awayTeamImage = (
    <img
      src={`${BASE_API}/team/${awayTeamId}/image`}
      width={100}
      height={100}
      style={{ marginLeft: "24px" }}
      alt="Away team logo"
    />
  );

  return (
    <>
      <S.MainEventContainer>
        <S.EventTeamContainer>
          {homeTeamImage}
          <div>{data.event?.homeTeam.name}</div>
        </S.EventTeamContainer>
        <S.EventScoreContainer>
          {hasScore ? (
            <>
              <div>
                <span style={{ color: isLive ? "red" : "inherit" }}>
                  {data.event?.homeScore.current} :{" "}
                </span>
                <span style={{ color: isLive ? "red" : "inherit" }}>
                  {data.event?.awayScore.current}
                </span>
              </div>
              <S.FirstHalf>
                ({data.event?.homeScore.period1} :{" "}
                {data.event?.awayScore.period1})
              </S.FirstHalf>
            </>
          ) : !didStart ? (
            <span style={{ color: "red" }}>
              {data.event?.status.description}
            </span>
          ) : (
            <Countdown
              date={startTime}
              renderer={(props) =>
                props.days ? (
                  <div>
                    {props.days}d:{props.hours}h:{props.minutes}m:
                    {props.seconds}s
                  </div>
                ) : (
                  <div>
                    {props.hours}h:{props.minutes}m:{props.seconds}s
                  </div>
                )
              }
            />
          )}
        </S.EventScoreContainer>
        <S.EventTeamContainer>
          <div>{data.event?.awayTeam.name}</div>
          {awayTeamImage}
        </S.EventTeamContainer>
      </S.MainEventContainer>
      <S.CenterVenue>
        <div>MATCH INFO</div>
        <div>Start date: {timestampToDateTime(data.event.startTimestamp)}</div>
        {hasVenue && (
          <S.CenterVenue>
            Location: {data.event.venue?.city.name},{" "}
            {data.event.venue?.country.name}
            <div>Venue: {data.event.venue?.stadium.name}</div>
          </S.CenterVenue>
        )}
      </S.CenterVenue>
    </>
  );
};
export default EventDetails;
