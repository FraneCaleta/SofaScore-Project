import { useRouter } from "next/router";

const Event = () => {
  const router = useRouter();
  return <div>{router.query.eventId}</div>;
};

export default Event;
