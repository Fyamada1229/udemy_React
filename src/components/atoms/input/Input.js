import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <Sinput type="text" placeholder={placeholder} />;
};

const Sinput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;

export default Input;
