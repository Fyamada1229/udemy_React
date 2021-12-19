import styled from "styled-components";
import { useHistory } from "react-router";
import { SeconderyButon } from "../atoms/button/SeconderyButton";

export const Top = () => {
  const history = useHistory();

  const onClickAidmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: "/users", state: { isGeneral: false } });

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SeconderyButon onClick={onClickAidmin}>管理者ユーザー</SeconderyButon>
      <SeconderyButon onClick={onClickGeneral}>ユーザ</SeconderyButon>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
