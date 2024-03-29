import ReusableHead from "../components/layout/ReusableHead";
import useSWR from "swr";
import Link from "next/link";
import { StyledContainer } from "../components/styles/Container.styled";
import { StyledMain } from "../components/styles/Main.styled";
import { StyledGrid } from "../components/styles/Grid.styled";
import { StyledCard } from "../components/styles/Card.styled";
import {
  BASE_API,
  OFFSET,
  TITLE,
  DESCRIPTION,
  KEYWORDS,
  DATE_TODAY,
} from "../utils/constants";
import MainHeader from "../components/layout/MainHeader";
import DateHeader from "../components/layout/DateHeader";

export default function Home() {
  const fetcher = async () => {
    const response = await fetch(
      `${BASE_API}/sport/football/${DATE_TODAY}/${OFFSET}/categories`
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
      <ReusableHead
        title={TITLE}
        description={DESCRIPTION}
        keywords={KEYWORDS}
      />
      <MainHeader />
      <DateHeader />
      <StyledContainer>
        <StyledMain>
          <StyledGrid>{handleData()}</StyledGrid>
        </StyledMain>
      </StyledContainer>
    </>
  );
}
