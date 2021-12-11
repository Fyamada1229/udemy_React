import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://source.unsplash.com/CM1oVEUzsNM"
        alt="プロフィール"
      />
      <p>名前</p>
      <SDL>
        <dl>
          <dt>メール</dt>
          <dd>111111@gmail.com</dd>
          <dt>TEL</dt>
          <dd>000-9999-999</dd>
          <dt>会社名</dt>
          <dd>山田商会</dd>
          <dt>webサイト</dt>
          <dd>111111/ssss/sss</dd>
        </dl>
      </SDL>
    </div>
  );
};

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
