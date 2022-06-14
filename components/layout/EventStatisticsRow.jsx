import React from "react";
import * as S from "../styles/EventStatisticsRow.styled";

const EventStatisticsRow = ({ data }) => {
  if (!data.statistics) return "No statistics for given game";
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
              <span><b>{statistics.name}</b></span>
              <span>{statistics.away}</span>
            </S.EventStatisticsRow>
          );
        });
      })}
    </div>
  );
};
export default EventStatisticsRow;
