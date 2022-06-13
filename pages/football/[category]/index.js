import useSWR from "swr";
import ReusableHead from "../../../components/layout/ReusableHead";
import { StyledContainer } from "../../../components/styles/Container.styled";
import {
  DATE_TODAY,
  BASE_API,
  DESCRIPTION,
  KEYWORDS,
} from "../../../utils/constants";
import { filterTimestamps, getTimestampToTime } from "../../../utils/date";

export async function getServerSideProps(context) {
  console.log(context.query);
  return {
    props: {
      id: context.query.id,
      category: context.query.category,
    },
  };
}

const Category = (props) => {
  const categoryNameUpperCase =
    props.category.charAt(0).toUpperCase() + props.category.slice(1);
  const fetcher = async () => {
    const response = await fetch(
      `${BASE_API}/category/${props.id}/scheduled-events/${DATE_TODAY}`
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

  if (sortedData) {
    categoryNameUpperCase = sortedData[0].tournament.category.name;
  }

  const handleData = () => {
    return sortedData.map((item, i) => {
      if (!filterTimestamps(item.startTimestamp)) {
        return false;
      }

      const tournamentName = item.tournament.name;
      const { homeTeam, awayTeam, startTimestamp } = item;
      const startTime = getTimestampToTime(startTimestamp);
      return (
        <div key={i}>
          <h3>{tournamentName}</h3>
          <p>
            {homeTeam.name} &emsp; <br />
            {awayTeam.name}&emsp; 1<br />
            {startTime}
          </p>
          <hr />
        </div>
      );
    });
  };

  return (
    <StyledContainer>
      <ReusableHead
        title={`SofaScore: ${categoryNameUpperCase}`}
        description={DESCRIPTION}
        keywords={KEYWORDS}
      />
      <h1>
        {categoryNameUpperCase} ({DATE_TODAY})
      </h1>
      {handleData()}
    </StyledContainer>
  );
};

export default Category;
