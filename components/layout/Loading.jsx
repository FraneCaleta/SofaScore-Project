import spinner from "../../public/cool_spinner.gif";
import { StyledLoading } from "../styles/Loading.styled";
import Image from "next/image";

export default function Loading() {
  return (
    <StyledLoading>
      <Image width={300} height={300} src={spinner} alt="Loading..." />
    </StyledLoading>
  );
}
