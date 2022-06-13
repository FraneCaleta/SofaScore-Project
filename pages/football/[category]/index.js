import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  return <p>Category: {category}</p>;
};

export default Category;
