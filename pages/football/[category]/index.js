import { useRouter } from "next/router";
import useSWR from "swr";
import { DATE_TODAY, BASE_API } from "../../../utils/constants";

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

  const handleData = () => {
    const tournamentName = data.events.map((item) => item.tournament.name);
    return tournamentName;
  };

  return (
    <>
      <p>
        Category: {props.category} {props.id}
      </p>
      <div>{handleData()}</div>
    </>
  );
};

export default Category;
