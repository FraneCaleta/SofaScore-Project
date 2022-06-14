/* eslint-disable @next/next/no-img-element */
import MainHeader from "../../components/layout/MainHeader";
import useSWR from "swr";
import EventStatisticsRow from "../../components/layout/EventStatisticsRow";
import ReusableHead from "../../components/layout/ReusableHead";
import { StyledContainer } from "../../components/styles/Container.styled";
import { BASE_API, DESCRIPTION, KEYWORDS } from "../../utils/constants";

export async function getServerSideProps(context) {
  console.log(context.query);
  return {
    props: {
      eventId: context.query.eventId,
    },
  };
}

const Event = ({ eventId }) => {
  const fetcher = async () => {
    const response = await fetch(`${BASE_API}/event/${eventId}/statistics`);
    return await response.json();
  };
  const { data: statisticsData, error: statisticsError } = useSWR(
    "event-statistics",
    fetcher
  );

  const otherFetcher = async () => {
    const response = await fetch(`${BASE_API}/event/${eventId}`);
    return await response.json();
  };

  const { data: detailsData, error: detailsError } = useSWR(
    "event-details",
    otherFetcher
  );

  if (statisticsError || detailsError) return "An error has occurred";
  if (!statisticsData || !detailsData) return "Loading.. .";
  console.log(detailsData);

  const homeTeamId = detailsData.event.homeTeam.id;
  const awayTeamId = detailsData.event.awayTeam.id;

  const homeTeamImage = (
    <img
      src={`${BASE_API}/team/${homeTeamId}/image`}
      width={100}
      height={100}
      alt="Home team logo"
    />
  );
  const awayTeamImage = (
    <img
      src={`${BASE_API}/team/${awayTeamId}/image`}
      width={100}
      height={100}
      alt="Away team logo"
    />
  );

  return (
    <>
      <MainHeader />
      <StyledContainer>
        <ReusableHead
          title={"SofaScore statistics"}
          description={DESCRIPTION}
          keywords={KEYWORDS}
        />
        <EventStatisticsRow data={statisticsData} />
        {homeTeamImage}
        {awayTeamImage}
      </StyledContainer>
    </>
  );
};

export default Event;
