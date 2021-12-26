import React, { useContext, memo } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { UserState } from "../../../store/UserState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  //  const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(UserState);

  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}No</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
