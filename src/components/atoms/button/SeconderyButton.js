import styled from "styled-components";
import { BaseBotton } from "./BaseBotton";

export const SeconderyButon = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseBotton)`
  background-color: #11999e;
`;
