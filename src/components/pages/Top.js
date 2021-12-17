import styled from "styled-components";
import { SeconderyButon } from "../atoms/button/SeconderyButton";

export const Top = () => {
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SeconderyButon>管理者</SeconderyButon>
      <SeconderyButon>ユーザ</SeconderyButon>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
