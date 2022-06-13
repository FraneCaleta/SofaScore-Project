import ReusableHead from "../components/layout/ReusableHead";
import useSWR from "swr";
import Link from "next/link";
import { StyledContainer } from "../components/styles/Container.styled";
import { StyledMain } from "../components/styles/Main.styled";
import { StyledGrid } from "../components/styles/Grid.styled";
import { StyledCard } from "../components/styles/Card.styled";
import { DATE_TODAY, BASE_API, OFFSET } from "../utils/constants";

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
        <StyledCard key={i}>
          <Link
            href={{
              pathname: `/${sportSlug}/${categorySlug}`,
              query: {
                id: c.category.id,
              },
            }}
            // to remove id from query but still have it in router
            // as={`/${sportSlug}/${categorySlug}`}
          >
            <h2>
              {c.category.name} {c.uniqueTournamentIds.length}
            </h2>
          </Link>
        </StyledCard>
      );
    });
  };

  return (
    <StyledContainer>
      <ReusableHead
        title="SofaScore: The Fastest Football Scores and Live Score"
        description="Follow live results, statistics, league tables, fixtures and videos"
        keywords="Football, livescore, live scores, sofascore, results, sofa score"
      />

      <StyledMain>
        <StyledGrid>{handleData()}</StyledGrid>
      </StyledMain>
    </StyledContainer>
  );
}
