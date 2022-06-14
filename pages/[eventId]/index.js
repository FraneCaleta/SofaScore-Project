import { useRouter } from "next/router";
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
  const { data, error } = useSWR("event-statistics", fetcher);

  if (error) return "An error has occurred";
  if (!data) return "Loading.. .";
  console.log(data);

  return (
    <StyledContainer>
      <ReusableHead
        title={"SofaScore statistics"}
        description={DESCRIPTION}
        keywords={KEYWORDS}
      />
      <EventStatisticsRow data={data} />
    </StyledContainer>
  );
};

export default Event;
