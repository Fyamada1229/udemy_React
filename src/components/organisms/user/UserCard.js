import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserlconWithName";

export const UserCard = (props) => {
  const { user } = props;

  const Yamada = "山田です";
  return (
    <Card>
      <UserIconWithName
        image={user.image}
        name={user.name}
        yamada={Yamada}
        id={user.id}
      />
      <SDL>
        <dl>
          <dt>メール</dt>
          <dd>{user.email}</dd>
          <dt>TEL</dt>
          <dd>{user.phone}</dd>
          <dt>会社名</dt>
          <dd>{user.company.name}</dd>
          <dt>WEB</dt>
          <dd>{user.website}</dd>
        </dl>
      </SDL>
    </Card>
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
    padding-bottom: 5px;
    padding-top: 1px;
    overflow-wrap: break-word;
  }
`;
