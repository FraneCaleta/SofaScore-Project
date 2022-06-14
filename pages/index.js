import React, { useState, useCallback } from "react";
import ReusableHead from "../components/layout/ReusableHead";
import useSWR from "swr";
import Link from "next/link";
import { StyledContainer } from "../components/styles/Container.styled";
import { StyledMain } from "../components/styles/Main.styled";
import { StyledGrid } from "../components/styles/Grid.styled";
import { StyledCard } from "../components/styles/Card.styled";
import {
  DATE_TODAY,
  BASE_API,
  OFFSET,
  TITLE,
  DESCRIPTION,
  KEYWORDS,
} from "../utils/constants";
import MainHeader from "../components/layout/MainHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { addDays, getDateTodayNormal, getDateToISO } from "../utils/date";
import * as S from "../components/styles/DateHeader.styled";

export default function Home() {
  const [date, setDate] = useState(DATE_TODAY);

  /* const handleDate = useCallback(
    (day) => {
      if (day === 0) {
        setDate(getDateTodayNormal);
      } else {
        setDate(addDays(date, day));
      }
      console.log(date);
    },
    [date]
  ); */

  const fetcher = async () => {
    const response = await fetch(
      `${BASE_API}/sport/football/${date}/${OFFSET}/categories`
    );
    return await response.json();
  };
  const { data, error } = useSWR("categories", fetcher);

  if (error) return "An error has occurred";
  if (!data) return "Loading.. .";

  const handleData = () => {
    const filteredUts = data.categories.filter(
      (item) => item.uniqueTournamentIds
    );

    const sortedUts = filteredUts.sort(
      (a, b) => b.category.priority - a.category.priority
    );

    return sortedUts.map((c, i) => {
      const sportSlug = c.category.sport.slug;
      const categorySlug = c.category.slug;
      return (
        <Link
          key={i}
          href={{
            pathname: `/${sportSlug}/${categorySlug}`,
            query: {
              id: c.category.id,
            },
          }}
        >
          <a>
            <StyledCard>
              <h2>
                {c.category.name} ({c.totalEvents})
              </h2>
            </StyledCard>
          </a>
        </Link>
      );
    });
  };

  return (
    <>
      <MainHeader />
      <S.DateHeaderContainer>
        <S.MainDateHeaderContainer>
          <S.FlexDateContainer>
            <Link href={`/`}>
              <a onClick={() => setDate(addDays(date, -1))}>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  color="rgb(0,87,163)"
                  size="lg"
                />
                Previous day
              </a>
            </Link>
            <Link href={`/`}>
              <a>
                <FontAwesomeIcon
                  icon={faCalendar}
                  color="rgb(0,87,163)"
                  size="lg"
                />
                Today
              </a>
            </Link>
            <Link href={`/`}>
              <a>
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
      <StyledContainer>
        <ReusableHead
          title={TITLE}
          description={DESCRIPTION}
          keywords={KEYWORDS}
        />

        <StyledMain>
          <StyledGrid>{handleData()}</StyledGrid>
        </StyledMain>
      </StyledContainer>
    </>
  );
}
