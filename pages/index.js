import ReusableHead from "../components/layout/ReusableHead";
import useSWR from "swr";
import Link from "next/link";
import { StyledContainer } from "../components/styles/Container.styled";
import { StyledMain } from "../components/styles/Main.styled";
import { StyledGrid } from "../components/styles/Grid.styled";
import { StyledCard } from "../components/styles/Card.styled";
import { getDateToday } from "../utils/date";

const DATE_TODAY = getDateToday;
const OFFSET = 7200;

export default function Home() {
  const fetcher = async () => {
    const response = await fetch(
      `https://api.sofascore.com/api/v1/sport/football/${DATE_TODAY}/${OFFSET}/categories`
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
          <Link href={`/${sportSlug}/${categorySlug}`}>
            <h2>
              {c.category.name} {c.uniqueTournamentIds.length}
            </h2>
            {/* <p>Find in-depth information about Next.js features and API.</p> */}
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
