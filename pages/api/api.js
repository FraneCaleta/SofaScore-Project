/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";

const baseURL = "https://api.sofascore.com/api/v1";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const fetchCategories = async (sport, date, offset) => {
  const fullUrl = `${baseURL}/sport/${sport}/${date}/${offset}/categories`;
  const { data, error } = useSWR(fullUrl, fetcher);

  if (error) return "An error has occurred";
  if (!data) return "Loading...";

  return data;
};
