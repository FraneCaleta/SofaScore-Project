import useSWR from "swr";
import FlexCard from "../../components/layout/FlexCard";
import ReusableHead from "../../components/layout/ReusableHead";
import { StyledContainer } from "../../components/styles/Container.styled";
import {
  DATE_TODAY,
  BASE_API,
  DESCRIPTION,
  KEYWORDS,
} from "../../utils/constants";
import { filterTimestamps, getTimestampToTime } from "../../utils/date";
import MainHeader from "../../components/layout/MainHeader";

const LiveGames = () => {
  const fetcher = async () => {
    const response = await fetch(
      `${BASE_API}/sport/football/scheduled-events/${DATE_TODAY}`
    );
    return await response.json();
  };
  const { data, error } = useSWR("scheduled-events", fetcher);

  if (error) return "An error has occurred";
  if (!data) return "Loading.. .";
  console.log(data);

  const sortedData = data.events.sort(
    (a, b) => b.tournament.priority - a.tournament.priority
  );

  const categoryNameUpperCase = (categoryNameUpperCase =
    sortedData[0].tournament.category.name);

  const handleData = () => {
    return sortedData.map((item, i) => {
      if (!filterTimestamps(item.startTimestamp)) {
        return false;
      }

      const tournamentName = item.tournament.name;
      const { homeTeam, awayTeam, startTimestamp, homeScore, awayScore, id } =
        item;
      if (
        Object.keys(homeScore).length === 0 ||
        Object.keys(awayScore).length === 0
      ) {
        homeScore = "";
        awayScore = "";
      } else {
        homeScore = homeScore.display;
        awayScore = awayScore.display;
      }
      const startTime = getTimestampToTime(startTimestamp);
      return (
        <div key={i}>
          <FlexCard
            tournamentName={tournamentName}
            time={startTime}
            status={item.status.description}
            homeTeam={homeTeam.name}
            awayTeam={awayTeam.name}
            homeScore={homeScore}
            awayScore={awayScore}
            homeTeamId={homeTeam.id}
            awayTeamId={awayTeam.id}
            eventId={id}
          />
          <hr />
        </div>
      );
    });
  };

  return (
    <>
      <MainHeader />
      <StyledContainer>
        <ReusableHead
          title={`SofaScore: Live Games`}
          description={DESCRIPTION}
          keywords={KEYWORDS}
        />
        <h1 style={{ color: "#3700b3" }}>
          Live Games ({DATE_TODAY})
        </h1>
        {handleData()}
      </StyledContainer>
    </>
  );
};

export default LiveGames;
