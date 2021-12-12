import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #ffffff;
  box-shadow: #ddd 0px 0px 5px 3px;
  border-radius: 8px;
  padding: 16px;
`;
