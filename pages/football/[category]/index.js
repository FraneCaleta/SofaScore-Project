import { useRouter } from "next/router";
import useSWR from "swr";
import { DATE_TODAY, BASE_API } from "../../../utils/constants";

const Category = () => {
  const router = useRouter();
  const { category, id } = router.query;

  const fetcher = async () => {
    const response = await fetch(
      `${BASE_API}/category/${id}/scheduled-events/${DATE_TODAY}`
    );
    return await response.json();
  };
  const { data, error } = useSWR("scheduled-events", fetcher);

  if (error) return "An error has occurred";
  if (!data) return "Loading.. .";
  console.log(data);

  const handleData = () => {
    const tournamentName = data.events.map((item) => item.tournament.name);
    return tournamentName;
  };

  return (
    <>
      <p>
        Category: {category} {id}
      </p>
      <div>{handleData()}</div>
    </>
  );
};

export default Category;
