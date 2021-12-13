import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return (
    <>
      <SFooter>
        <SLink to="/">HOME</SLink>
        <SLink to="/users">USERS</SLink>
      </SFooter>
    </>
  );
};

const SFooter = styled.Footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
