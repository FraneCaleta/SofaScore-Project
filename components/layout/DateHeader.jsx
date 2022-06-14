/* eslint-disable react/display-name */
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
import { addDays, getDateTodayNormal, getDateToISO } from "../../utils/date";
import * as S from "../styles/DateHeader.styled";

const DateHeader = React.memo((props) => {
  const [date, setDate] = useState(getDateTodayNormal);

  const handleDate = useCallback(
    (day) => {
      if (day === 0) {
        setDate(getDateTodayNormal);
      } else {
        setDate(addDays(date, day));
      }
      props.passData(date);
    },
    [date]
  );

  return (
    <S.DateHeaderContainer>
      <S.MainDateHeaderContainer>
        <S.FlexDateContainer>
          <Link href={`/`}>
            <a onClick={() => handleDate(-1)}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                color="rgb(0,87,163)"
                size="lg"
              />
              Previous day
            </a>
          </Link>
          <Link href={`/`}>
            <a onClick={() => handleDate(0)}>
              <FontAwesomeIcon
                icon={faCalendar}
                color="rgb(0,87,163)"
                size="lg"
              />
              Today
            </a>
          </Link>
          <Link href={`/`}>
            <a onClick={() => handleDate(1)}>
              <FontAwesomeIcon
                icon={faArrowRight}
                color="rgb(0,87,163)"
                size="lg"
              />
              Next day
            </a>
          </Link>
        </S.FlexDateContainer>
      </S.MainDateHeaderContainer>
    </S.DateHeaderContainer>
  );
});

export default DateHeader;
