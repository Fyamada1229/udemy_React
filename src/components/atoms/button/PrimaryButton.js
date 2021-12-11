import styled from "styled-components";
import { BaseBotton } from "./BaseBotton";

export const PrmaryButon = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseBotton)`
  background-color: #40514e;
`;
