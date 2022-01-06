import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { SeconderyButon } from "../atoms/button/SeconderyButton";
import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { UserState } from "../../store/UserState";

export const Top = () => {
  const history = useHistory();
  //  const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(UserState);

  const onClickAidmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページ</h2>
      <SeconderyButon onClick={onClickAidmin}>管理者ユーザ</SeconderyButon>
      <br />
      <br />
      <SeconderyButon onClick={onClickGeneral}>ユーザ</SeconderyButon>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
