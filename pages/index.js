import ReusableHead from "../components/layout/ReusableHead";
import useSWR from "swr";
import styles from "../styles/Home.module.css";

export default function Home() {
  const fetcher = async () => {
    const response = await fetch(
      "https://api.sofascore.com/api/v1/sport/football/2022-06-12/7200/categories"
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
      return (
        // eslint-disable-next-line @next/next/no-html-link-for-pages
        <a key={i} href="/" className={styles.card}>
          <h2>
            {c.category.name} {c.uniqueTournamentIds.length} &rarr;
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      );
    });
  };

  return (
    <div className={styles.container}>
      <ReusableHead
        title="SofaScore: The Fastest Football Scores and Live Score for 2022"
        description="Follow live results, statistics, league tables, fixtures and videos"
        keywords="Football, livescore, live scores, sofascore, results, sofa score"
      />

      <main className={styles.main}>
        <div className={styles.grid}>{handleData()}</div>
      </main>
    </div>
  );
}
