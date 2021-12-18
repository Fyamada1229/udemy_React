import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  console.log(props);
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      <h1>No.{props.id}</h1>
    </SContainer>
  );
};

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
