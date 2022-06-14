import * as S from "../styles/EventStatisticsRow.styled";
import Link from "next/link";

const EventStatisticsRow = ({ data }) => {
  if (!data.statistics) {
    return (
      <>
        <h1>No statistics for given game</h1>
        <Link href="/">
          <a>
            <h1>Take me back</h1>
          </a>
        </Link>
      </>
    );
  }
  const groupData =
    data.statistics && data.statistics[0].groups.map((items) => items);
  const filteredData = groupData.map((item) => item.statisticsItems);
  return (
    <div>
      {filteredData.map((item) => {
        return item.map((statistics) => {
          console.log(statistics);
          return (
            <S.EventStatisticsRow key={statistics.name}>
              <span>{statistics.home}</span>
              <span>
                <b>{statistics.name}</b>
              </span>
              <span>{statistics.away}</span>
            </S.EventStatisticsRow>
          );
        });
      })}
    </div>
  );
};
export default EventStatisticsRow;
